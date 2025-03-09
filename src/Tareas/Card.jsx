/* eslint-disable no-unused-vars */
import React from 'react'

// eslint-disable-next-line react/prop-types
const Card = (props) => {
    const estado = props.isComplete
    const titulo = props.titulo
    const descrip = props.descripccion
    const setEstado = props.setEstado
    const actualizar = props.actualizar
    const eliminar = props.eliminar
    const id = props.id
    return (
        <div className="card col-12 p-2 shadow-sm flex-row justify-content-between mb-2">
            <div className='col-8'>
                <h3 className={estado?"text-secondary text-decoration-line-through" : 'text-primary'}>{titulo}</h3>
                <p className='text-secondary'>{descrip}</p>
            </div>
            <i className={estado?"bi bi-trash2 text-danger fs-4" : 'bi bi-journal-check text-success fs-4'}
            onClick={()=>{
                if(estado){
                   console.log("borrar")
                   eliminar(id)
                }else{
                    actualizar(estado, setEstado)
                }
            }}
            ></i>
        </div>
    )
}

export default Card