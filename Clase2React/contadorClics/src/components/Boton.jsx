import React from 'react'
import '../styles/Boton.css'

const Boton = ({texto, botonClic, manejarClic}) => {
  return (
    <button
        className={botonClic ? 'botonClic' : 'botonReset'}
        onClick={manejarClic}
    >
        {texto}
    </button>
  )
}

export default Boton
