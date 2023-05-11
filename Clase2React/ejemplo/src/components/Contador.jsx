import React from 'react'
import '../styles/contador.css'

const Contador = ({numClics}) => {
  return (
    <div
        className='contador'
    >
      {numClics}
    </div>
  )
}

export default Contador
