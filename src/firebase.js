import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


 const firebaseConfig = {
    apiKey: "AIzaSyC6SjKCScteqBMJvq40LWX4t5HT1yw_2MA",
    authDomain: "chat-react-ce1ae.firebaseapp.com",
    projectId: "chat-react-ce1ae",
    storageBucket: "chat-react-ce1ae.appspot.com",
    messagingSenderId: "361100140226",
    appId: "1:361100140226:web:deaa3fd75eebd2414d655b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider} 