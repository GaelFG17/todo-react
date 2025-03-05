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
      isComplete : false
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