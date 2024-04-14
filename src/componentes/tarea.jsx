import React from 'react'
import '../styles/tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

// Tenemos un id para identificar la tarea
// Tenemos el texto de la tarea
// Tenemos si la tarea fue completada o no
// Una funcion para completar una tarea, queremos que la tarea se marque
// como completada si damos click en el div que contiene el texto, por eso
// le asignamos la funcion con el metodo onClick, la función recibe como valor
// el id de la tarea.
//  -Una función para eliminar una Tarea, donde se aplica la misma logica anterior

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea}) => {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto'
      onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'>
        <AiOutlineCloseCircle 
        className='tarea-icono' 
        onClick={() => eliminarTarea(id)}/>
      </div>
    </div>
  )
}

export default Tarea;