import React from 'react'

export const ChatContext = React.createContext()

const ChatProvider = ({children}) => {

    const mensaje = 'hola soy context'
    return (
        <ChatContext.Provider value={{mensaje}}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
