import React from 'react'
import { Link } from 'react-router-dom'

export default function     NoMatch() {
  return (
    <h2>Looks like you are lost! Try to go <Link to={'/'}>Home</Link></h2>
  )
}
