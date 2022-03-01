import React from 'react'

const Error = ({ error }) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3'>
        <p>{ error }</p>
    </div>
  )
}

export default Error