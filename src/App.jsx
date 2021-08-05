import React from 'react'
import {ChatContext} from './context/ChatProvider'
import NavBar from './components/NavBar'

function App() {

  const {usuario} = React.useContext(ChatContext)
  return usuario !== null ?(
    <div>
      <NavBar />
    </div>
  ) : (
    'Loading...'
  )
}

export default App
