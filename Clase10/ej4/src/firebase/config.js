import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCwQB5kX9jy59ttGbj9ofTLCHGZ28sTDxw",
    authDomain: "primerproyectofire-6ff77.firebaseapp.com",
    projectId: "primerproyectofire-6ff77",
    storageBucket: "primerproyectofire-6ff77.firebasestorage.app",
    messagingSenderId: "417090603463",
    appId: "1:417090603463:web:fc643ae9d7db790209b1e2"
  };

  app.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const storage = app.storage()
  export const db = app.firestore()