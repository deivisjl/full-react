import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const {nombre, propietario, email, fecha,sintomas, id} = paciente;
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-md'>
        <p className='font-bold mb-3 text-gray-700'>Nombre: {''}
            <span className='font-normal'>{ nombre }</span>    
        </p>
        <p className='font-bold mb-3 text-gray-700'>Propietario: {''}
            <span className='font-normal'>{ propietario }</span>    
        </p>
        <p className='font-bold mb-3 text-gray-700'>Correo electrónico: {''}
            <span className='font-normal'>{ email }</span>    
        </p>
        <p className='font-bold mb-3 text-gray-700'>Fecha alta: {''}
            <span className='font-normal'>{ fecha }</span>    
        </p>
        <p className='font-bold mb-3 text-gray-700'>Síntomas: {''}
            <span className='font-normal'>{ sintomas }</span>    
        </p>
        <div className='flex justify-between mt-10'>
            <button 
                type="button"
                onClick={()=> setPaciente(paciente)}
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase'
                >
                Editar
            </button>
            <button 
                type="button"
                onClick={()=> eliminarPaciente(id)}
                className='py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold uppercase'
                >
                Eliminar    
            </button>
        </div>
    </div>
  )
}

export default Paciente

