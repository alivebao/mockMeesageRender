import React from 'react'
import './MessageBox.css'

const MessageWrapper = (msg, i) => (<div className='message-item' key={i}><i>msg {i}:  </i>{msg}</div>)

export default ({ messages = [] }) => {
  return <div className="message-box">
    <p>Message Box</p>
    {messages.length ? <ul>
      {messages.map((msg, index) =>
        msg.UIdescription ? MessageWrapper(msg.UIdescription(msg), index) : MessageWrapper(msg, index)
      )}
    </ul> : 'No Message'}
  </div>
}
