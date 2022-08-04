import React from 'react'
import { Link } from 'react-router-dom'

export default function NoMatch() {
  return (
    <div className='center'>
        <h2 className="primary">Looks like you are lost. Go to <Link to={'/home'}>Home</Link></h2>
    </div>
  )
}
