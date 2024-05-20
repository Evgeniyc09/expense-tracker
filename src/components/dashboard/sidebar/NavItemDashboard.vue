<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import * as HeroIcons from '@heroicons/vue/24/solid'
import type { IMenuItem } from '@/types/menu.types'

const props = defineProps({
	item: {
		type: Object as PropType<IMenuItem>,
		required: true
	}
})

const iconComponent = computed(() => {
	return HeroIcons[props.item.icon]
})
</script>

<template>
	<li>
		<RouterLink
			:to="item.url"
			class="nav-item"
		>
			<component
				:is="iconComponent"
				class="icon"
			/>
			{{ item.name }}
		</RouterLink>
	</li>
</template>
<style scoped>
.nav-item {
	@apply w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300;
}
.router-link-active {
	@apply w-full flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg dark:bg-neutral-700 dark:text-white;
}
.icon {
	@apply w-4 text-neutral-700 rounded-lg dark:bg-neutral-700 dark:text-white;
}
</style>
