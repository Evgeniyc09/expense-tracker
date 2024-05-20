<script setup lang="ts"></script>

<template>
	<div class="container">
		<div class="wrapper">
			<router-view />
		</div>
	</div>
</template>

<style scoped>
.container {
	@apply w-full lg:ps-64;
}
.wrapper {
	@apply p-4 sm:p-6 space-y-4 sm:space-y-6;
}
</style>
