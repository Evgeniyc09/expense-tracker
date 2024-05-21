import type { IFirestoreTimestamp } from '@/types/transaction.types'

export function formatDate(dateInput: string | Date | undefined): string {
	if (!dateInput) return ''
	const date = new Date(dateInput)
	const hours = date.getUTCHours().toString().padStart(2, '0')
	const minutes = date.getUTCMinutes().toString().padStart(2, '0')
	const day = date.getUTCDate().toString().padStart(2, '0')
	const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
	const year = date.getUTCFullYear()
	return `${hours}:${minutes} ${day}:${month}:${year}`
}

export function convertTimestamp(timestamp: IFirestoreTimestamp): Date {
	return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000)
}
