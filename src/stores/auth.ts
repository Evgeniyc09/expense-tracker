import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut
} from 'firebase/auth'
import { auth } from '@/firebase/firebaseConfig'
import type { User } from 'firebase/auth'
import type { IAuthFields } from '@/types/auth.types'

export const useAuthStore = defineStore('auth', () => {
	const user = ref<User | null>(null)

	async function logout() {
		try {
			await signOut(auth)
			user.value = null
		} catch (error) {
			console.error('Logout failed: ', error)
		}
	}

	const loginWithGoogle = async (): Promise<void> => {
		const provider = new GoogleAuthProvider()
		const result = await signInWithPopup(auth, provider)
		if (result) {
			user.value = result.user
		}
	}

	const login = async (payload: IAuthFields): Promise<void> => {
		const { email, password } = payload
		const result = await signInWithEmailAndPassword(auth, email, password)
		if (result) {
			user.value = result.user
		}
	}

	const register = async (payload: IAuthFields): Promise<void> => {
		const { email, password } = payload
		const result = await createUserWithEmailAndPassword(auth, email, password)
		if (result) {
			user.value = result.user
		}
	}

	return { user, login, loginWithGoogle, logout, register }
})
