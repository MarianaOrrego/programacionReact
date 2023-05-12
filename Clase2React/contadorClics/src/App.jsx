import { useState } from 'react'
import './App.css'
import Boton from './components/Boton'
import Contador from './components/Contador'

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setNumClics(0);
  }

  return (
    <>
      <h1>Contador de clics</h1>
      <Contador numClics={numClics}/>
      <div className='contenedor'>
        <Boton
          texto={'Clic'}
          botonClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto={'Reiniciar'}
          botonClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </>
  )
}

export default App
