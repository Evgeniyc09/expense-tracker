<script setup lang="ts">
import AppLogo from '../app/AppLogo.vue'
import HeaderProfileDashboard from '@/components/dashboard/HeaderProfileDashboard.vue'
</script>

<template>
	<header class="header">
		<nav
			class="nav"
			aria-label="Global"
		>
			<div class="me-5 lg:me-0 lg:hidden">
				<!-- Logo -->
				<AppLogo />
				<!-- End Logo -->
			</div>

			<div class="header-container">
				<div class="flex flex-row items-center justify-end gap-2">
					<HeaderProfileDashboard />
				</div>
			</div>
		</nav>
	</header>
</template>
<style scoped>
header {
	@apply sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-neutral-800 dark:border-neutral-700;
}
.nav {
	@apply flex basis-full items-center w-full mx-auto px-4 sm:px-6;
}
.header-container {
	@apply w-full flex items-center justify-end ms-auto sm:justify-end sm:gap-x-3 sm:order-3;
}
.header-profile-btn {
	@apply w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700;
}
</style>
