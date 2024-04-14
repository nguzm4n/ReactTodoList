import React, { useState } from 'react'
import TareaFormulario from './formulario'
import Tarea from './tarea.jsx'
import '../styles/listaDeTareas.css'


const ListaDeTareas = () => {

// Las tareas se guadan dentro de un array, representadas como un objeto
  const [tareas, setTareas] = useState([]);  

// Función para agregar tareas
  const agregarTarea = tarea => {
    console.log('Tarea agregada')
    console.log(tarea)
  }

  return (
    <>
      <TareaFormulario 
      onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {/* Como mostrar una lista de componentes renderizados en React */}
        {
          tareas.map((tarea) => {
            <Tarea
            texto={tarea.texto}
            completada={tarea.completada} />
          } )
        }
        Lista De Tareas
      </div>
    </>
  )
}

export default ListaDeTareas