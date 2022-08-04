import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Email() {
    let location = useLocation();
    let message = location.state.msg;
    return (
        <div>
            <h2>{message.subject}</h2>
            <h4>{message.from.email}</h4>
            <p>{message.body}</p>
        </div>
    )
}
