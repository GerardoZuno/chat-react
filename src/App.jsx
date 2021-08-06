import React from 'react'
import {ChatContext} from './context/ChatProvider'
import NavBar from './components/NavBar'
import Chat from './components/Chat'

function App() {

  const {usuario} = React.useContext(ChatContext)
  return usuario !== null ?(
    <div>
      <NavBar />
      {
      usuario.estado ? (
        <Chat />
      ) : (
        <div className="lead text-center mt-5">
          Debes Inicia Sesion...
        </div>
      )
      }
      
    </div>
  ) : (
    'Loading...'
  )
}

export default App
