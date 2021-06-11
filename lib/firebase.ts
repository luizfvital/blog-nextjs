import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA_FW3LqQJveevTy2wm1g8aECsVlVDbZok",
  authDomain: "blog-app-b1678.firebaseapp.com",
  projectId: "blog-app-b1678",
  storageBucket: "blog-app-b1678.appspot.com",
  messagingSenderId: "410106556763",
  appId: "1:410106556763:web:ad1b323c060f627e30aa7e",
  measurementId: "G-EXK0D8K8G5"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()