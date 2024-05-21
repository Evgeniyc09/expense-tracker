import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { db } from '@/firebase/firebaseConfig'
import { convertTimestamp } from '@/helpers'
import {
	doc,
	addDoc,
	collection,
	getDoc,
	onSnapshot,
	query,
	serverTimestamp,
	where
} from 'firebase/firestore'
import type { ITransaction } from '@/types/transaction.types'
import type { ICategory } from '@/types/categories.types'

const DB_NAME = 'transactions'

export const useTransactionStore = defineStore('transactions', () => {
	const authStore = useAuthStore()
	const transactions = ref<ITransaction[]>([])
	const isLoading = ref<boolean>(false)

	const fetchCategoryData = async (
		transaction: ITransaction
	): Promise<void> => {
		if (transaction.catId) {
			const categoryDoc = await getDoc(doc(db, 'categories', transaction.catId))
			if (categoryDoc.exists()) {
				const categoryData = categoryDoc.data() as ICategory
				transaction.category = {
					id: categoryDoc.id,
					name: categoryData.name,
					description: categoryData.description
				}
			}
		}
	}

	const getUserTransactions = (): void => {
		isLoading.value = true

		const userId = authStore.user?.uid
		if (!userId) {
			console.error('User is not authenticated')
			isLoading.value = false
			return
		}

		const q = query(collection(db, DB_NAME), where('userId', '==', userId))

		onSnapshot(q, async querySnapshot => {
			const tempTransactions: ITransaction[] = []
			const categoryPromises: Promise<void>[] = []

			querySnapshot.forEach(transactionDoc => {
				const data = transactionDoc.data()
				if (data.createdAt) {
					data.createdAt = convertTimestamp(data.createdAt)
				}

				const transaction: ITransaction = { id: transactionDoc.id, ...data }
				tempTransactions.push(transaction)

				// Добавляем промис для получения данных категории
				categoryPromises.push(fetchCategoryData(transaction))
			})

			await Promise.all(categoryPromises)
			transactions.value = tempTransactions
			isLoading.value = false
		})
	}

	const createTransaction = async (
		transaction: ITransaction
	): Promise<void> => {
		const userId = authStore.user?.uid

		if (!userId) {
			console.error('User is not authenticated')
			return
		}

		await addDoc(collection(db, DB_NAME), {
			amount: transaction.amount,
			description: transaction.description,
			type: transaction.type,
			createdAt: serverTimestamp(),
			userId: userId,
			catId: transaction.catId
		})
	}

	return { transactions, isLoading, getUserTransactions, createTransaction }
})
