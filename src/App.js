import React, { useState } from 'react'
import './App.css'
import { MessageBox, OperationArea } from './components'

function App() {
  const [operationAreaOpened, setOperationAreaOpened] = useState(false);
  const [messages, setMessages] = useState([]);
  return (
    <div
      className={`container ${operationAreaOpened ? 'open' : ''}`}>
      <MessageBox
        messages={messages} />
      <OperationArea
        messages={messages} 
        setMessages={setMessages}
        operationAreaOpened={operationAreaOpened}
        toggleOperationStatus={() => setOperationAreaOpened(!operationAreaOpened)} />
    </div>
  )
}

export default App
