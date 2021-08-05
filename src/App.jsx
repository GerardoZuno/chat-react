import React from 'react'
import {ChatContext} from './context/ChatProvider'

function App() {

  const {mensaje} = React.useContext(ChatContext)
  return (
    <div>
      <h2>
        {mensaje}
      </h2>
    </div>
  )
}

export default App
