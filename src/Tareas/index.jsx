/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

const Tareas = () => {
  return (
    <section className='flex flex-column justify-content-center align-items-center p-4 col-9'>
      <Card isComplete={true} titulo = {"algo"} descripccion = {"texto de descripcion"}/>
      <Card isComplete={false} titulo = {"algo2"} descripccion = {"texto de descripcion2"}/>
    </section>
  )
}

export default Tareas