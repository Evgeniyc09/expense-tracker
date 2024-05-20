<template>
	<!-- Hero -->
	<section class="hero-section">
		<div class="container">
			<!-- Announcement Banner -->
			<div class="flex justify-center">
				<a
					class="badge"
					href="#"
				>
					Expense tracker
				</a>
			</div>
			<!-- End Announcement Banner -->

			<!-- Title -->
			<div class="mt-5 max-w-2xl text-center mx-auto">
				<h1
					class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200"
				>
					Let's keep track
					<span
						class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"
						>Together</span
					>
				</h1>
			</div>
			<!-- End Title -->

			<div class="mt-5 max-w-3xl text-center mx-auto">
				<p class="text-lg text-gray-600 dark:text-neutral-400">
					Tech stack: Vue 3, Pinia, Tailwind / UI preline, Firebase
				</p>
			</div>

			<!-- Buttons -->
			<div class="mt-8 gap-3 flex justify-center">
				<RouterLink
					to="/app"
					class="link"
				>
					Get started
					<svg
						class="flex-shrink-0 size-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="m9 18 6-6-6-6" />
					</svg>
				</RouterLink>
			</div>
			<!-- End Buttons -->

			<div class="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
				<span class="text-sm text-gray-600 dark:text-neutral-400">Author:</span>
				<span class="text-sm font-bold text-gray-900 dark:text-white"
					>Evgeniy Chernyshev</span
				>
				<svg
					class="size-5 text-gray-300 dark:text-neutral-600"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						d="M6 13L10 3"
						stroke="currentColor"
						stroke-linecap="round"
					/>
				</svg>
				<span class="text-sm text-gray-600 dark:text-neutral-400"
					>Frontend Developer</span
				>
			</div>
		</div>
	</section>
	<!-- End Hero -->
</template>
<style scoped>
.hero-section {
	@apply relative flex items-center overflow-hidden before:absolute before:top-0 h-full before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2;
}
.container {
	@apply max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10;
}
.badge {
	@apply inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 px-3 rounded-full transition dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200;
}
.link {
	@apply inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800;
}
</style>
