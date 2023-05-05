import React from 'react'
import imagenDiego from '../assets/img/David.png'
import imagenFabian from '../assets/img/Fabian.jpg'
import imagenHarold from '../assets/img/Harold.jpg'
import imagenJuan from '../assets/img/Juan_David.jpg'
import { RazonCiafItem } from './RazonCiafItem'

const razones = [
    {
      numero: '1.',
      titulo: 'Horarios',
      imagen: imagenDiego,
      textoLegend: '"La flexibilidad de los horarios se acomoda a mis necesidades"',
      autor: 'David Alejandro Anacona',
      texto: 'Ofrecemos jornadas diurnas, nocturna, fines de semanas y sólo sábados',
    },
    {
      numero: '2.',
      titulo: 'Financiación Directa',
      imagen: imagenFabian,
      textoLegend: '"La financiación directa y garantizada, sin fiadores con CIAF, me permitió comenzar mis estudios"',
      autor: 'Fabián Eduardo Bedoya',
      texto: '¡Confiamos en el estudiante!',
    },
    {
      numero: '3.',
      titulo: 'Tres Títulos',
      imagen: imagenJuan,
      textoLegend: '"Recibo tres títulos durante mi proceso de formación: Técnico, Tecnólogo y Profesiona"',
      autor: 'Juan David Rodríguez',
      texto: 'Lo que te permitirá ir avanzando en tu trabajo y formación, mejorando tus ingresos.',
    },
    {
      numero: '4.',
      titulo: 'Crecimiento',
      imagen: imagenHarold,
      textoLegend: '"Sigo creciendo"',
      autor: 'Harold Cardona',
      texto: 'CIAF vive en constante proceso de mejoramiento de la calidad de los programas ofrecidos.',
    },
  ];
  
export const RazonesCiaf = () => {
    return (
      <>
        <div>
          <h2>4 Razones para estudiar en CIAF</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {razones.map((razon, index) => (
            <RazonCiafItem key={index} numero={razon.numero} titulo={razon.titulo} imagen={razon.imagen} 
                textoLegend={razon.textoLegend} autor={razon.autor} texto={razon.texto} 
            />
          ))}
        </div>
      </>
    );
  };

