/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

const Tareas = ({listaTareas, setListaTareas}) => {

  const eliminar = (id) => {
    const listaNueva = listaTareas.map((tarea,index)=>{
      if (index != id) return tarea
    })
    setListaTareas(listaNueva)
  }

  const actualizar = (status, hook) => {
    hook(!status)
  }
  return (
    <section className='flex flex-column justify-content-center align-items-center p-4 col-9'>
      {
        // eslint-disable-next-line react/prop-types
        listaTareas.map(
          (tarea, index) =>{
            const [estado,setEstado] = React.useState(tarea.isComplete)
            return ( 
              <Card
              key = {index}
              eliminar = {eliminar}
              actualizar = {actualizar}
              isComplete = {estado}
              titulo = {tarea.titulo}
              descripccion = {tarea.descripccion}
              setEstado = {setEstado}
              id = {index}
              />
            )
          }
        )
      }
    </section>
  )
}

export default Tareas