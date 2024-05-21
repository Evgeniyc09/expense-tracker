<script setup lang="ts">
import TableTransactions from '@/components/dashboard/table/TableTransactions.vue'
import { useTransactionStore } from '@/stores/transactions'
import { storeToRefs } from 'pinia'
import { computed, onMounted } from 'vue'

const transactionStore = useTransactionStore()
const { getUserTransactions, isLoading } = transactionStore

const { transactions } = storeToRefs(transactionStore)

const transactionsCount = computed(() => transactions.value.length)

const getAllUsersTransactions = async () => {
	try {
		getUserTransactions()
	} catch (e) {
		console.log(e)
	}
}

onMounted(() => {
	getAllUsersTransactions()
})
</script>
<template>
	<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
		<!-- Card -->
		<div class="flex flex-col">
			{{ transactions }}
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
									<RouterLink
										:to="{ path: '/app/transaction' }"
										class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
									</RouterLink>
								</div>
							</div>
						</div>
						<!-- End Header -->

						<!-- Table -->
						<div v-if="transactions">
							<TableTransactions :transactions="transactions" />
							<!-- Footer -->
							<div
								class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700"
							>
								<div>
									<p class="text-sm text-gray-600 dark:text-neutral-400">
										<span
											class="font-semibold text-gray-800 dark:text-neutral-200"
											>{{ transactionsCount }}</span
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
</template>
