import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='main-container'>
            <h1>Welcome to the Best Email Client!</h1>

            <p>Let's try and understand Routing</p>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/inbox">Inbox</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    )
}
