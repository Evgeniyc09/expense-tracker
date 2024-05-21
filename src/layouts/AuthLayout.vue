<template>
	<div class="auth-section">
		<main class="auth-container">
			<div class="form-container">
				<RouterView />
			</div>
		</main>
	</div>
</template>

<style scoped>
.auth-section {
	@apply relative flex items-center overflow-hidden before:absolute before:top-0 h-full before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2;
}
.auth-container {
	@apply w-full max-w-md mx-auto p-6;
}
.form-container {
	@apply mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700;
}
</style>
