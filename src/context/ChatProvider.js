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
    const [mensajes, SetMensajes] = React.useState([])

    React.useEffect(() =>{
      detectarUsuario()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const detectarUsuario = () => {
        auth.onAuthStateChanged(user => {
            if(user){
              setUsuario({
                  uid: user.uid,
                  email: user.email,
                  estado: true
                           })
                 cargarMensajes()             
         
            }else{
                setUsuario({
                  uid: null,
                  email: null,
                  estado: false
                })
            }
        })
    }

    const agregarMensajes = async(uidChat, textoInput) => {
       try{
         await db.collection('chat').add({
             fecha: Date.now(),
             texto: textoInput,
             uid: uidChat
         })
       }catch(err){
           console.log(err)
       }
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

    const cargarMensajes = () => {
        db.collection('chat')
          .onSnapshot(query => {
            const arrayMensajes = query.docs.map(item => item.data())
            SetMensajes(arrayMensajes)  
        })
    }

    return (
        <ChatContext.Provider value={{usuario, ingresoUsuario, cerrarSesion, mensajes, agregarMensajes }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
