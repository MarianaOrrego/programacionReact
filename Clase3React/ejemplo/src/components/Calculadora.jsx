import React, { useState } from "react";
import Boton from "./Boton";
import BotonClear from "./BotonClear";
import Pantalla from "./Pantalla";
import { evaluate } from "mathjs";

import "../App.css";

const Calculadora = () => {

  const [input, setInput] = useState('');

  const agregarInput = (valor) => {
    setInput(input + valor);
  }

  const manejarClear = () => {
    setInput('');
  }

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }
  }

  return (
    <div className="container">
      <div className="calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={manejarClear}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
