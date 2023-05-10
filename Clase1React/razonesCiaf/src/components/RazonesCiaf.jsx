import React from 'react'
import David from '../assets/img/David.png';
import Fabian from '../assets/img/Fabian.jpg';
import RazonesCiafItem from './RazonesCiafItem';

const razones =[
    {
        num: '1.',
        title: 'Horarios Flexibles',
        img: David, 
        legend: 'Estudiante de CIAF',
        student: 'David',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        num: '2.',
        title: 'Información',
        img: Fabian, 
        legend: 'Estudiante de CIAF',
        student: 'David',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        num: '3.',
        title: 'Hola',
        img: David, 
        legend: 'Estudiante de CIAF',
        student: 'David',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        num: '4.',
        title: 'Adios',
        img: Fabian, 
        legend: 'Estudiante de CIAF',
        student: 'David',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    }
]


const RazonesCiaf = () => {
  return (
    <div>
      <h1>4 Razones para estudiar en CIAF</h1>
      <div
        style={{display: 'flex', justifyContent: 'space-between'}}
      >
        {
            razones.map((razon, index) => (
                <RazonesCiafItem key={index}
                    num={razon.num}
                    title={razon.title}
                    img={razon.img}
                    legend={razon.legend}
                    student={razon.student}
                    text={razon.text}
                />
            ))
        }
      </div>
    </div>
  )
}

export default RazonesCiaf

