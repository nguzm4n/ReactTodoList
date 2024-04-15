import React, { useState, useEffect } from 'react'
import '../styles/tarea-formulario.css'
import { v4 as uuidv4 } from 'uuid'

const TareaFormulario = ({ onSubmit }) => {

  const [input, setInput] = useState('')


  const manejarCambio = e => {
    const nuevoValor = e.target.value
    setInput(nuevoValor);
  }

  // Agregar Tareas

  const manejarEnvio = e => {
    e.preventDefault();


    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    onSubmit(tareaNueva)
  }


  return (
    <form className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button
        className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  )
}

export default TareaFormulario;