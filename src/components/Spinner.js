import React from 'react'
import loading from '../loading (2).gif'

const Spinner = () => {
  return (
    <div className='text-center'>
        <img className='my-3' src={loading} alt='spinner gif' />
      </div>
  )
}

export default Spinner
