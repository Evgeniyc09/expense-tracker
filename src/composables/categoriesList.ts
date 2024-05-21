// mouse.js
import { useCategoriesStore } from '@/stores/categories'
import { onMounted } from 'vue'

// by convention, composable function names start with "use"
export function useCategoriesList() {
	const categoriesStore = useCategoriesStore()

	const getAllUsersCategories = async () => {
		try {
			await categoriesStore.getUserCategory()
		} catch (e) {
			console.log(e)
		}
	}

	onMounted(() => getAllUsersCategories())
}
