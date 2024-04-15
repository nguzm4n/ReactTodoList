import React, { useState } from 'react'
import TareaFormulario from './formulario'
import Tarea from './tarea.jsx'
import '../styles/listaDeTareas.css'


const ListaDeTareas = () => {

  // Las tareas se guadan dentro de un array, representadas como un objeto
  const [tareas, setTareas] = useState([]);

  // Función para agregar tareas
  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.text = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas)
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas)
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada
      } return tarea;
    })
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario
        onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {/* Como mostrar una lista de componentes renderizados en React */}
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} />
          )
        }
        Lista De Tareas
      </div>
    </>
  )
}

export default ListaDeTareas