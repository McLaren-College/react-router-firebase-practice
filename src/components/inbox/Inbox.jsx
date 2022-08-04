import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMessages } from '../../firebase-functions'

export default function Inbox() {
    const [messages, setMessages] = useState([])
    useEffect(() => {
      getMessages(setMessages)
    },[])
    
    return (
        <div>
            {messages.length === 0 && <h2>No messages yet.</h2>}
            {messages.map(message => (
                <Link key={message.id} to={'/inbox/' + message.id} state={{msg: message}}>
                    <div className="mail-card">
                        <p className="name">{message.from.name}</p>
                        <p className="message">{message.subject} <span>{message.body}</span></p>
                        <p className="date">{new Date(message.date).toDateString()}</p>
                    </div>
                </Link>
            ))}
            <Link to={'/compose'} className="btn">New Message</Link>
        </div>
    )
}
