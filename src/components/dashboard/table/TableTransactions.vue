<script setup lang="ts">
import TableRowTransactions from '@/components/dashboard/table/TableRowTransactions.vue'
import { type PropType } from 'vue'
import type { ITransaction } from '@/types/transaction.types'

const props = defineProps({
	transactions: {
		type: Object as PropType<ITransaction[]>,
		required: true
	}
})
</script>

<template>
	<!-- Table -->
	<table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
		<thead class="bg-gray-50 dark:bg-neutral-900">
			<tr>
				<th
					scope="col"
					class="px-6 py-3 text-start"
				>
					<div class="flex items-center gap-x-2">
						<span
							class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
						>
							Name
						</span>
					</div>
				</th>
				<th
					scope="col"
					class="px-6 py-3 text-start"
				>
					<div class="flex items-center gap-x-2">
						<span
							class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
						>
							Description
						</span>
					</div>
				</th>

				<th
					scope="col"
					class="px-6 py-3 text-start"
				>
					<div class="flex items-center gap-x-2">
						<span
							class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
						>
							Status
						</span>
					</div>
				</th>

				<th
					scope="col"
					class="px-6 py-3 text-start"
				>
					<div class="flex items-center gap-x-2">
						<span
							class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
						>
							Created
						</span>
					</div>
				</th>

				<th
					scope="col"
					class="px-6 py-3 text-end"
				></th>
			</tr>
		</thead>

		<tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
			<TableRowTransactions
				v-for="transaction in transactions"
				:key="transaction.id"
				:transaction="transaction"
			/>
		</tbody>
	</table>
	<!-- End Table -->
</template>

<style scoped></style>
