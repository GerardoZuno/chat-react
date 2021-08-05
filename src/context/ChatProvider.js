import React from 'react'
import {db, auth, provider} from '../firebase'

export const ChatContext = React.createContext()

const ChatProvider = ({children}) => {

    const dataUsuario = {
        uid: null,
        email: null,
        estado: null
    }

    const [usuario, setUsuario] = React.useState(dataUsuario)


    React.useEffect(() =>{
      detectarUsuario()
    }, [])

    const detectarUsuario = () => {
        auth.onAuthStateChanged(user => {
            if(user){
              setUsuario({
                  uid: user.uid,
                  email: user.email,
                  estado: true
                           })
            }else{
                setUsuario({
                  uid: null,
                  email: null,
                  estado: false
                })
            }
        })
    }

    const ingresoUsuario = async() => {
        try {
          await auth.signInWithPopup(provider)
          const res = await auth.signInWithPopup(provider)
          console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    const cerrarSesion = () => {
       auth.signOut()
    }

    return (
        <ChatContext.Provider value={{usuario, ingresoUsuario, cerrarSesion }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
