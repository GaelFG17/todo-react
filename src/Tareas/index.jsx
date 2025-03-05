/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

const Tareas = ({listaTareas, setListaTareas}) => {
  return (
    <section className='flex flex-column justify-content-center align-items-center p-4 col-9'>
      {
        // eslint-disable-next-line react/prop-types
        listaTareas.map(
          (tarea, index) =>{
            return ( 
              <Card
              key = {index}
              isComplete = {tarea.isComplete}
              titulo = {tarea.titulo}
              descripccion = {tarea.descripccion}
              />
            )
          }
        )
      }
    </section>
  )
}

export default Tareas