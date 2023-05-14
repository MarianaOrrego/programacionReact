import "./App.css";
import Boton from "./components/Boton";
import BotonClear from "./components/BotonClear";
import Pantalla from "./components/Pantalla";

function App() {
  return (
    <>
      <h1>Calculadora</h1>
      <div className="container">
        <div className="calculadora">
          <Pantalla input="0" />
          <div className="fila">
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>/</Boton>
          </div>
          <div className="fila">
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <Boton>*</Boton>
          </div>
          <div className="fila">
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>-</Boton>
          </div>
          <div className="fila">
            <Boton>0</Boton>
            <Boton>.</Boton>
            <Boton>=</Boton>
            <Boton>+</Boton>
          </div>
          <div className="fila">
            <BotonClear>Clear</BotonClear>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
