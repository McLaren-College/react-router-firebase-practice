import React from 'react'
import NoMatch from './NoMatch';
import { getMessageById } from "../messages";
import { useParams } from 'react-router-dom';
export default function Mail() {
    let { id } = useParams();
    let message = getMessageById(id);
  
    if (!message) {
      return <NoMatch />;
    }
  
    return (
      <div className='mail'>
        <h2>{message.subject}</h2>
        <div>
          <h3 style={{ fontSize: 14 }}>
            <span>{message.from.name}</span>{" "}
            <span>&lt;{message.from.email}&gt;</span>
          </h3>
          <div>{message.body}</div>
        </div>
      </div>
    );
}
