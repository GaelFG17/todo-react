// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Header from './Header';
import Formulario from './Formulario';
import Tareas from './Tareas';

const App = () => {
  const [listaTareas, setListaTareas] = useState([
    {
      titulo : "Tarea 1",
      descripccion : "Descripcion de la tarea 1",
      isComplete : true,
    },
    {
      titulo : "Tarea 2",
      descripccion : "Descripcion de la tarea 2",
      isComplete : false,
    },
    {
      titulo : "Tarea 3",
      descripccion : "Descripcion de la tarea 3",
      isComplete : true,
    },
    {
      titulo : "Tarea 4",
      descripccion : "Descripcion de la tarea 4",
      isComplete : false,
    },
    {
      titulo : "Tarea 5",
      descripccion : "Descripcion de la tarea 5",
      isComplete : true,
    },
    {
      titulo : "Tarea 6",
      descripccion : "Descripcion de la tarea 6",
      isComplete : false,
    }
  ])
  return (
    <>
      <Header/>
      <Formulario setListaTareas = {setListaTareas}/>
      <Tareas 
        listaTareas = {listaTareas} 
        setListaTareas = {setListaTareas}
      />
    </>
  )
}

export default App;