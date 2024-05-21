import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HistoryView from '@/views/HistoryView.vue'
import StatisticsView from '@/views/StatisticsView.vue'
import TransactionView from '@/views/TransactionView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import RegistrationForm from '@/components/auth/RegistrationForm.vue'
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
		path: '/',
		name: 'auth',
		// route level code-splitting
		component: AuthLayout,
		children: [
			{
				path: '/login',
				name: 'login',
				component: LoginForm
			},
			{
				path: '/registration',
				name: 'registration',
				component: RegistrationForm
			}
		]
	},
	{
		path: '/app',
		name: 'app',
		// route level code-splitting
		component: AuthorizedLayout,
		redirect: '/app/transaction',
		children: [
			{
				path: 'transaction',
				component: TransactionView
			},
			{
				path: 'history',
				component: HistoryView
			},
			{
				path: 'statistics',
				component: StatisticsView
			},
			{
				path: 'categories',
				component: CategoriesView
			}
		],
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
