export interface ICategory {
	id?: string
	name: string
	description?: string
	createdAt?: string | Date
	userId?: string
}

export interface IFirestoreTimestamp {
	seconds: number
	nanoseconds: number
}
