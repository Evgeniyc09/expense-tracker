export enum TransactionType {
	Expense = 'expense',
	Income = 'income'
}

export interface ITransaction {
	id?: string
	amount?: number
	type?: TransactionType
	description?: string
	createdAt?: string | Date
	userId?: string
	catId?: string
	category?: {
		id: string
		name: string
		description?: string
	}
}

export interface IFirestoreTimestamp {
	seconds: number
	nanoseconds: number
}
