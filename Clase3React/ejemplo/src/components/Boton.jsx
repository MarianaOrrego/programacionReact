import React from 'react'
import '../styles/boton.css'

const Boton = (props) => {

    const esOperador = val =>{
      return isNaN(val) && val != "." && val != "=";
    }

  return (
    <div
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`}
        onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  )
}

export default Boton
