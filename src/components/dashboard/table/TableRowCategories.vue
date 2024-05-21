<script setup lang="ts">
import type { ICategory } from '@/types/categories.types'
import type { PropType } from 'vue'
import { formatDate } from '@/helpers'

const props = defineProps({
	category: {
		type: Object as PropType<ICategory>,
		required: true
	}
})
</script>

<template>
	<tr>
		<td class="size-sm whitespace-nowrap">
			<div class="px-6 py-3">
				<span class="dark:text-neutral-200">{{ category.name }}</span>
			</div>
		</td>
		<td class="size-sm whitespace-nowrap">
			<div class="px-6 py-3">
				<span class="text-sm dark:text-neutral-200">{{
					category.description
				}}</span>
			</div>
		</td>
		<td class="size-px whitespace-nowrap">
			<div class="px-6 py-3">
				<span
					class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500"
				>
					<svg
						class="size-2.5"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
						/>
					</svg>
					Created
				</span>
			</div>
		</td>
		<td class="size-px whitespace-nowrap">
			<div class="px-6 py-3">
				<span class="text-sm text-gray-500 dark:text-neutral-500">{{
					formatDate(category.createdAt)
				}}</span>
			</div>
		</td>
	</tr>
</template>

<style scoped>
.th {
	@apply px-6 py-3 text-start;
}
.th-container {
	@apply flex items-center gap-x-2;
}
.th-text {
	@apply text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200;
}
</style>
