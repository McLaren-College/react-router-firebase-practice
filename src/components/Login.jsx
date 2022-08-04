import React from 'react'

export default function Login(props) {
    return (
        <div className='center main-container'>
            <h1>Best Email Client</h1>
            <button className='btn primary' onClick={() => {
                props.setIsLoggedIn((prev) => !prev);
            }}>Login</button>
        </div>
    )
}
