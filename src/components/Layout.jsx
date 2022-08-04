import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout(props) {
  return (
    <div className='main-container'>
      <div className="header">
        <h1>Best Email Client</h1>
        <nav className='links'>
          <div className="links">
            <Link to={''}>Home</Link>
            <Link to={'about'}>About</Link>
            <Link to={'inbox'}>Inbox</Link>
          </div>
          <button className="btn logout" onClick={() => props.setIsLoggedIn(false)}>Logout</button>
        </nav>
      </div>
      <hr />
      <Outlet />
    </div>
  )
}
