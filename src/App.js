import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
// import { Main } from './components/Main/Main';
import { Cuadrado } from './components/Main/Cuadrado/Cuadrado';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Main></Main> */}
      <Cuadrado></Cuadrado>
      <Footer></Footer>
    </div>
  );
}

export default App;
