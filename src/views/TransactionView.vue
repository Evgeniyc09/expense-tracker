<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories'
import { useTransactionStore } from '@/stores/transactions'
import { TransactionType, type ITransaction } from '@/types/transaction.types'
import { storeToRefs } from 'pinia'
import { reactive } from 'vue'
import { useCategoriesList } from '@/composables/categoriesList'

const transactionStore = useTransactionStore()
const categoriesStore = useCategoriesStore()

const { categories } = storeToRefs(categoriesStore)
const { isLoading, createTransaction } = transactionStore

const transaction = reactive<ITransaction>({
	amount: 0,
	description: '',
	type: TransactionType.Expense,
	catId: ''
})

const handleSubmit = async () => {
	try {
		await createTransaction(transaction)

		transaction.amount = 0
		transaction.description = ''
	} catch (e) {
		console.error(e)
	}
}
useCategoriesList()
</script>

<template>
	<!-- Grid -->
	<div>
		<div v-if="isLoading">
			<p
				class="h-4 bg-gray-200 rounded-full dark:bg-neutral-700"
				style="width: 40%"
			></p>

			<ul class="mt-5 space-y-3">
				<li
					class="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"
				></li>
				<li
					class="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"
				></li>
				<li
					class="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"
				></li>
				<li
					class="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"
				></li>
			</ul>
		</div>
		<!-- Card Section -->
		<div
			v-else
			class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto"
		>
			<!-- Card -->
			<div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
				<div class="mb-8">
					<h2 class="text-xl font-bold text-gray-800 dark:text-neutral-200">
						Transaction
					</h2>
					<p class="text-sm text-gray-600 dark:text-neutral-400">
						Complete your transaction
					</p>
				</div>

				<form @submit.prevent="handleSubmit">
					<!-- Grid -->
					<div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
						<div class="sm:col-span-3">
							<label
								for="af-account-email"
								class="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
							>
								Amount
							</label>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-9">
							<input
								v-model="transaction.amount"
								id="af-account-amount"
								type="number"
								class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
								placeholder="12312"
							/>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-3">
							<div class="inline-block">
								<label
									for="af-account-phone"
									class="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
								>
									Categories
								</label>
							</div>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-9">
							<div class="sm:flex">
								<select
									v-model="transaction.catId"
									class="py-2 px-3 pe-9 block w-full sm:w-auto border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
								>
									<option
										v-for="category in categories"
										v-text="category.name"
										:value="category.id"
										:key="category.id"
									></option>
								</select>
							</div>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-3">
							<label
								for="af-account-gender-checkbox"
								class="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
							>
								Type
							</label>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-9">
							<div class="sm:flex">
								<label
									for="af-account-gender-checkbox"
									class="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
								>
									<input
										v-model="transaction.type"
										value="expense"
										type="radio"
										name="af-account-gender-checkbox"
										class="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
										id="af-account-gender-checkbox"
										checked
									/>
									<span class="text-sm text-gray-500 ms-3 dark:text-neutral-400"
										>Expense</span
									>
								</label>

								<label
									for="af-account-gender-checkbox-female"
									class="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
								>
									<input
										v-model="transaction.type"
										value="income"
										type="radio"
										name="af-account-gender-checkbox"
										class="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
										id="af-account-gender-checkbox-female"
									/>
									<span class="text-sm text-gray-500 ms-3 dark:text-neutral-400"
										>Income</span
									>
								</label>
							</div>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-3">
							<label
								for="af-account-bio"
								class="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200"
							>
								Description
							</label>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-9">
							<textarea
								v-model="transaction.description"
								id="af-account-bio"
								class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
								rows="6"
								placeholder="Type your message..."
							></textarea>
						</div>
						<!-- End Col -->
					</div>
					<!-- End Grid -->

					<div class="mt-5 flex justify-end gap-x-2">
						<button
							type="submit"
							class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
						>
							Save changes
						</button>
					</div>
				</form>
			</div>
			<!-- End Card -->
		</div>
		<!-- End Card Section -->
	</div>
	<!-- End Grid -->
</template>
