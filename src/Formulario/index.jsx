import React from 'react'

const Formulario = () => {
  return (
    <>
        <form className="flex flex-column col-9 border border-primary rounded-3 mt-4 p-4 shadow">
            <h2 className='text-center'>To - do List</h2>
            <div className='input-group mb-3 col-12'>
                <label className='input-group-text'>
                    <i className='bi bi-list-task me-1'></i>
                </label>
                <input type="text" className="form-control " placeholder="Escribe una tarea" required/>
            </div>
            <div className='input-group mb-3 col-12'>
                <label className='input-group-text'>
                    <i className='bi bi-chat me-1'></i>
                </label>
                <input className='form-control' placeholder="Describe la tarea" required/>
            </div>
            <button className="btn btn-primary col-3 col-12">Agregar</button>
        </form>
        <div className='btn-group-2 mt-3'>
            <button className='btn btn-outline-primary border border-dark border-end-0 rounded-end-0 rounded-start-2'>Todos</button>
            <button className='btn btn-warning border border-dark border-end-0 rounded-0'>Pendientes</button>
            <button className='btn btn-danger border border-dark rounded-end-2 rounded-start-0'>Completados</button>
        </div>
    </>
  )
}

export default Formulario