import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Layout } from "./components/pages/Layout";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Layout></Layout>
        {/* <Routes>
          <Route path="*" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/cuadrado" element={<Cuadrado />}></Route>
        </Routes> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
