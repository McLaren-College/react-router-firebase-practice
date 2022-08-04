import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addMsg } from '../../firebase-functions'

export default function Compose() {
    const [name, setSenderName] = useState('')
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const goTo = useNavigate();

    return (
        <div>
            <div className="form-field">
                <label htmlFor="name">Sender's Name:</label>
                <input name={"name"} type="text" value={name} onChange={(e) => setSenderName(e.target.value)} placeholder='Jane Doe' />
            </div>
            <div className="form-field">
                <label htmlFor="email">Sender's Email</label>
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='reach@jane.com' />
            </div>
            <div className="form-field">
                <label htmlFor="subject">Subject:</label>
                <input type="text" name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Re: buying property' />
            </div>
            <div className="form-field">
                <label htmlFor="body">Body</label>
                <textarea name='body' value={body} onChange={(e) => setBody(e.target.value)} rows={5} />
            </div>
            {/* `To` is always same */}
            <button className='btn primary' onClick={async (e) => {
                let data = {
                    to: {
                        name: 'Arnav',
                        email: 'arnav@mclarencollege.in'
                    },
                    from: {
                        name, email
                    },
                    body,
                    subject,
                    date: new Date().toISOString()
                }

                let result = await addMsg(data);
                if (result === false) {
                    alert('ERROR occured');
                } else {
                    goTo('/inbox');
                }
            }}>Send</button>
        </div>
    )
}
