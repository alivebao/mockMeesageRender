import React, { useState, createElement } from 'react'
import './OperationArea.css'

export default ({ messages, setMessages, operationAreaOpened, toggleOperationStatus }) => {
  let imgContent = {};
  let i = 0
  const [message, setMessage] = useState()
  const sendMsg = () => {
    if (!message) {
      return
    }
    setMessages([...messages, message])
    setMessage('')
  }
  return <div className="operation-area">
    <p>OperationArea</p>
    <input value={message} onKeyDown={e => {
      if (e.key === 'Enter') {
        sendMsg()
      }
    }} onChange={e => setMessage(e.target.value)} />
    <button onClick={sendMsg}>send</button>
    <button onClick={toggleOperationStatus}>{operationAreaOpened ? 'less' : 'more'}</button>
    {
      operationAreaOpened && <div className="operation-options">
        <ul>
          <li onClick={e => {
            document.querySelector('#imgInp').click()
          }}><button>upload img</button></li>
          <input style={{ display: 'none' }} type='file' id="imgInp" accept="image/*" onChange={(e) => {
            const files = e.target.files
            if (files && files[0]) {
              var reader = new FileReader();
              reader.onload = function (e) {
                imgContent = e.target.result
                document.getElementById('img').setAttribute('src', imgContent);
              }
              reader.readAsDataURL(files[0]); // convert to base64 string
            }
          }} />
          <div>
            <p>imgage preview</p>
            <img id="img" accept="image/*" style={{
              width: "10rem", height: '6rem'
            }} />
            <button onClick={e => {
              setMessages([...messages, {
                UIdescription: (i) => <img id={`img_++1`} accept="image/*" style={{
                  width: "6rem", height: '6rem'
                }} src={imgContent} />
              }])
              document.getElementById('img').setAttribute('src', '#')
            }} >send</button> <button onClick={(e) => document.getElementById('img').setAttribute('src', '#')} >cancel</button>
          </div>


          <li><button onClick={() => setMessages([...messages, { UIdescription: () => 'it is just a msg you can config it as you wish' }])}>sys msg</button></li>
        </ul>
      </div>
    }


  </div >
}