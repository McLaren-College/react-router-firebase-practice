import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login(props) {
    let goTo = useNavigate();
    return (
        <div className='center main-container'>
            <button onClick={() => {
                props.setIsLoggedIn(true)
                goTo('/')
            }}>Login</button>
        </div>
    )
}
