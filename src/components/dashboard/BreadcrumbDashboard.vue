<script setup lang="ts">
import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue'
import MenuButtonIcon from '@/components/icons/MenuButtonIcon.vue'
</script>

<template>
	<div class="breadcrumb">
		<div class="container">
			<!-- Breadcrumb -->
			<ol class="breadcrumb-list">
				<li class="breadcrumb-list-item">
					Application Layout
					<ArrowRightIcon />
				</li>
				<li
					class="breadcrumb-list-item--current"
					aria-current="page"
				>
					Dashboard
				</li>
			</ol>
			<!-- End Breadcrumb -->

			<!-- Sidebar -->
			<button
				type="button"
				class=""
				data-hs-overlay="#application-sidebar"
				aria-controls="application-sidebar"
				aria-label="Sidebar"
			>
				<MenuButtonIcon />
				<span class="sr-only">Sidebar</span>
			</button>
			<!-- End Sidebar -->
		</div>
	</div>
</template>

<style scoped>
.breadcrumb {
	@apply sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700;
}
.container {
	@apply flex justify-between items-center py-2;
}
.breadcrumb-list {
	@apply ms-3 flex items-center whitespace-nowrap;
}
.breadcrumb-list-item {
	@apply flex items-center text-sm text-gray-800 dark:text-neutral-400;

	&--current {
		@apply text-sm font-semibold text-gray-800 truncate dark:text-neutral-400;
	}
}
.sidebar-button {
	@apply py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200;
}
</style>
