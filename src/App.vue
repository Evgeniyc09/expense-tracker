<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { type IStaticMethods } from 'preline/preline'
declare global {
	interface Window {
		HSStaticMethods: IStaticMethods
	}
}

onMounted(() => {
	setTimeout(() => {
		window.HSStaticMethods.autoInit()
	}, 100)
})
</script>

<template>
	<RouterView />
</template>
