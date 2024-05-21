<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories'
import TableCategories from '@/components/dashboard/table/TableCategories.vue'
import type { ICategory } from '@/types/categories.types'
import { computed, reactive } from 'vue'
import { toast } from 'vue3-toastify'
import { useCategoriesList } from '@/composables/categoriesList'

const categoriesStore = useCategoriesStore()

const category = reactive<ICategory>({
	name: '',
	description: ''
})

const categories = computed(() => categoriesStore.categories)
const categoriesCount = computed(() => categories.value.length)

const handleSubmit = async () => {
	try {
		await categoriesStore.createCategory(category)

		category.name = ''
		category.description = ''
		toast('The category has been added', {
			theme: 'dark',
			type: 'default',
			dangerouslyHTMLString: true
		})
	} catch (e) {
		console.error(e)
	}
}
useCategoriesList()
</script>
<template>
	<!-- Card Section -->
	<div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
		<form @submit.prevent="handleSubmit">
			<!-- Card -->
			<div class="bg-white rounded-xl shadow dark:bg-neutral-900">
				<div class="pt-0 p-4 sm:pt-0 sm:p-7">
					<!-- Grid -->
					<div class="space-y-4 sm:space-y-6">
						<div class="space-y-2">
							<label
								for="af-submit-app-project-name"
								class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
							>
								Category name
							</label>

							<input
								v-model="category.name"
								id="af-submit-app-project-name"
								type="text"
								class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
								placeholder="Enter category name"
								required
							/>
						</div>

						<div class="space-y-2">
							<label
								for="af-submit-app-description"
								class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
							>
								Description
							</label>

							<textarea
								v-model="category.description"
								id="af-submit-app-description"
								class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
								rows="6"
								placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
							></textarea>
						</div>
					</div>
					<!-- End Grid -->

					<div class="mt-5 flex justify-center gap-x-2">
						<button
							type="submit"
							class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
						>
							Create a new category
						</button>
					</div>
				</div>
			</div>
			<!-- End Card -->
		</form>
	</div>
	<!-- End Card Section -->
	<!-- Table Section -->
	<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
		<!-- Card -->
		<div class="flex flex-col">
			<div class="-m-1.5 overflow-x-auto">
				<div class="p-1.5 min-w-full inline-block align-middle">
					<div
						class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700"
					>
						<!-- Header -->
						<div
							class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700"
						>
							<div>
								<h2
									class="text-xl font-semibold text-gray-800 dark:text-neutral-200"
								>
									Transaction history
								</h2>
							</div>

							<div>
								<div class="inline-flex gap-x-2">
									<a
										class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
										href="#"
									>
										View all
									</a>

									<a
										class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
										href="#"
									>
										<svg
											class="flex-shrink-0 size-4"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M5 12h14" />
											<path d="M12 5v14" />
										</svg>
										Create
									</a>
								</div>
							</div>
						</div>
						<!-- End Header -->

						<!-- Table -->
						<div v-if="categories">
							<TableCategories :categories="categories" />
							<!-- Footer -->
							<div
								class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700"
							>
								<div>
									<p class="text-sm text-gray-600 dark:text-neutral-400">
										<span
											class="font-semibold text-gray-800 dark:text-neutral-200"
											>{{ categoriesCount }}</span
										>
										results
									</p>
								</div>
							</div>
							<!-- End Footer -->
						</div>
						<div v-else>No data</div>
						<!-- End Table -->
					</div>
				</div>
			</div>
		</div>
		<!-- End Card -->
	</div>
	<!-- End Table Section -->
</template>
