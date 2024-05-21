<script setup lang="ts">
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/vue/24/solid'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { toast } from 'vue3-toastify'

const router = useRouter()
const authStore = useAuthStore()

const { user } = storeToRefs(authStore)

const profileName = computed(() => user.value?.displayName || user.value?.email)
const firstCharName = computed(() => user.value?.email?.charAt(0).toUpperCase())

const logout = async () => {
	try {
		await authStore.logout()
		router.push({ name: 'home' })
	} catch (error) {
		console.error(error)
	}
}
</script>

<template>
	<div
		id="hs-dropdown-with-header"
		class="hs-dropdown [--placement:bottom-right] relative inline-flex items-center"
	>
		<div class="mr-2 text-right">
			{{ profileName }}
		</div>
		<button
			type="button"
			class="header-profile-btn"
		>
			<img
				v-if="user?.photoURL"
				class="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800"
				:src="user.photoURL"
				alt="Image Description"
			/>
			<div
				v-else
				class="inline-flex shrink-0 justify-center items-center size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800"
			>
				<span class="text-xl">{{ firstCharName }}</span>
			</div>
		</button>

		<div
			class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
			aria-labelledby="hs-dropdown-with-header"
		>
			<div class="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-neutral-800">
				<p class="text-sm text-gray-500 dark:text-neutral-400">Signed in as</p>
				<p class="text-sm font-medium text-gray-800 dark:text-neutral-300">
					{{ user?.email }}
				</p>
			</div>
			<div class="mt-2 py-2 first:pt-0 last:pb-0">
				<button
					class="logout-btn"
					@click.prevent="logout"
				>
					<ArrowLeftEndOnRectangleIcon class="w-4" />
					Logout
				</button>
			</div>
		</div>
	</div>
</template>
<style scoped>
header {
	@apply sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-neutral-800 dark:border-neutral-700;
}
.nav {
	@apply flex basis-full items-center w-full mx-auto px-4 sm:px-6;
}
.logout-btn {
	@apply w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300;
}
.header-container {
	@apply w-full flex items-center justify-end ms-auto sm:justify-end sm:gap-x-3 sm:order-3;
}
.header-profile-btn {
	@apply w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700;
}
</style>
