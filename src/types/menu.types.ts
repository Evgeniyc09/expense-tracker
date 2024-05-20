export interface IMenuItem {
	name: string
	url: string
	icon: keyof typeof import('@heroicons/vue/24/solid')
}
