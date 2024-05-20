<script setup lang="ts">
import AppLogo from '@/components/app/AppLogo.vue'
import NavItemDashboard from './NavItemDashboard.vue'
import { ref } from 'vue'
import type { IMenuItem } from '@/types/menu.types'

const menuItems = ref<IMenuItem[]>([
	{ name: 'Dashboard', url: '/app', icon: 'HomeIcon' },
	{ name: 'History', url: '/login', icon: 'ClockIcon' },
	{ name: 'Statistics', url: '/', icon: 'ChartPieIcon' }
])
</script>

<template>
	<div
		id="application-sidebar"
		class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700"
	>
		<div class="px-8 pt-4">
			<!-- Logo -->
			<AppLogo />
			<!-- End Logo -->
		</div>

		<nav
			class="nav hs-accordion-group"
			data-hs-accordion-always-open
		>
			<ul class="space-y-1.5">
				<li>
					<NavItemDashboard
						v-for="(item, index) in menuItems"
						:key="index"
						:item="item"
					/>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style scoped>
.nav {
	@apply p-6 w-full flex flex-col flex-wrap;
}
</style>
