import React from "react";
import "./Apitest.scss";
import { useState, useEffect } from "react";

export const Apitest = () => {
  const [usuarios, setUsuarios] = useState([]);
  // let url_api = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((usuarios) => {
        setUsuarios(usuarios);
      });
  }, []);

  return (
    <div>
      <h1>Consumo de API</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usr) => {
            return (
              <tr key={usr.id}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
