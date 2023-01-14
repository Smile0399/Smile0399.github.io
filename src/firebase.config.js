import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyAi_OKuJYD8vzXlLeHuHxz6mtcFjpVsXOo',

  authDomain: 'pam-taylor.firebaseapp.com',

  projectId: 'pam-taylor',

  storageBucket: 'pam-taylor.appspot.com',

  messagingSenderId: '578467640660',

  appId: '1:578467640660:web:cb40367f4da72f42c944c1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
