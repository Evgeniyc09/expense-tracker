import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { db } from '@/firebase/firebaseConfig'
import {
	addDoc,
	collection,
	onSnapshot,
	query,
	serverTimestamp,
	where
} from 'firebase/firestore'
import type { ICategory } from '@/types/categories.types'
import { convertTimestamp } from '@/helpers'

const DB_NAME = 'categories'

export const useCategoriesStore = defineStore('categories', () => {
	const authStore = useAuthStore()
	const categories = ref<ICategory[]>([])
	const userId = authStore.user?.uid

	const getUserCategory = async (): Promise<void> => {
		const q = query(collection(db, DB_NAME), where('userId', '==', userId))
		onSnapshot(q, querySnapshot => {
			const tempCategories: ICategory[] = []
			querySnapshot.forEach(doc => {
				const data = doc.data()
				if (data.createdAt) {
					data.createdAt = convertTimestamp(data.createdAt)
				}
				tempCategories.push({ id: doc.id, ...data } as ICategory)
			})
			categories.value = tempCategories
		})
	}

	const createCategory = async (category: ICategory): Promise<void> => {
		const userId = authStore.user?.uid

		await addDoc(collection(db, DB_NAME), {
			name: category.name,
			description: category.description,
			createdAt: serverTimestamp(),
			userId
		})
	}

	return { categories, createCategory, getUserCategory }
})
