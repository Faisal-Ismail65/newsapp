import React, { Component } from 'react'
import loading from '../loading (2).gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='spinner gif' />
      </div>
    )
  }
}

export default Spinner