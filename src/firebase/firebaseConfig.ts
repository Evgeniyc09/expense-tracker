import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBh7fj9kDDrmCwg_w6SuZhDlOmGKTNaKTg',
	authDomain: 'expense-87b51.firebaseapp.com',
	projectId: 'expense-87b51',
	storageBucket: 'expense-87b51.appspot.com',
	messagingSenderId: '299844804642',
	appId: '1:299844804642:web:fef3945c479533ac2e6a7b'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
