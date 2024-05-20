import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AuthorizedLayout from '@/layouts/AuthorizedLayout.vue'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/firebaseConfig'
import { type IStaticMethods } from 'preline/preline'
import { useAuthStore } from '@/stores/auth'

declare global {
	interface Window {
		HSStaticMethods: IStaticMethods
	}
}

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView
	},
	{
		path: '/app',
		name: 'app',
		// route level code-splitting
		component: AuthorizedLayout,
		children: [],
		meta: { requiresAuth: true }
	}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
	const authStore = useAuthStore()

	if (requiresAuth) {
		onAuthStateChanged(auth, user => {
			if (user) {
				authStore.user = user
				next()
			} else {
				next('/login')
			}
		})
	} else {
		next()
	}
})

router.afterEach((to, from, failure) => {
	if (!failure) {
		setTimeout(() => {
			window.HSStaticMethods.autoInit()
		}, 100)
	}
})

export default router
