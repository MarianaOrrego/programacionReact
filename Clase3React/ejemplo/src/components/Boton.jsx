import React from 'react'
import '../styles/boton.css'

const Boton = (props) => {

    const esOperador = val =>{
      return isNaN(val) && val != "." && val != "=";
    }

  return (
    <div
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`}
    >
      {props.children}
    </div>
  )
}

export default Boton
