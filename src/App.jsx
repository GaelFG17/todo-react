// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Header from './Header';
import Formulario from './Formulario';
import Tareas from './Tareas';

const App = () => {
  const [listaTareas, setListaTareas] = useState([])
  return (
    <>
      <Header/>
      <Formulario 
      listaTareas = {listaTareas}
      setListaTareas = {setListaTareas}/>
      <Tareas 
        listaTareas = {listaTareas} 
        setListaTareas = {setListaTareas}
      />
    </>
  )
}

export default App;