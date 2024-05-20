<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import type { FieldContext, FormContext } from 'vee-validate'
import * as yup from 'yup'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import GoogleIconVue from '@/components/icons/GoogleIcon.vue'
import { toast } from 'vue3-toastify'
import type { IAuthFields } from '@/types/auth.types'
import { authSchema } from '@/validationSchemas'

const router = useRouter()
const authStore = useAuthStore()

const { handleSubmit, errors }: FormContext<IAuthFields> = useForm<IAuthFields>(
	{
		validationSchema: authSchema
	}
)

const { value: email }: FieldContext<string> = useField<string>('email')
const { value: password }: FieldContext<string> = useField<string>('password')

const loginIsFailed = () => {
	toast.error('Failed login', {
		theme: 'dark',
		autoClose: 1000
	})
}

const onLoginWithGoogle = async () => {
	try {
		await authStore.loginWithGoogle()
		router.push('/app')
	} catch (error) {
		loginIsFailed()
	}
}
const onLogin = handleSubmit(async (values: IAuthFields) => {
	try {
		await authStore.login(values)
		router.push('/app')
	} catch (error) {
		loginIsFailed()
	}
})
</script>

<template>
	<div class="p-4 sm:p-7">
		<div class="text-center">
			<h1 class="title">Sign in</h1>
			<p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
				Don't have an account yet?
				<RouterLink
					to="/"
					class="link-to-reg"
					>Sign up here</RouterLink
				>
			</p>
		</div>

		<div class="mt-5">
			<button
				type="button"
				@click="onLoginWithGoogle"
				class="google-btn"
			>
				<GoogleIconVue />
				Sign in with Google
			</button>

			<div
				class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600"
			>
				Or
			</div>

			<!-- Form -->
			<form @submit.prevent="onLogin">
				<div class="grid gap-y-4">
					<!-- Form Group -->
					<div>
						<label
							for="email"
							class="block text-sm mb-2 dark:text-white"
							>Email address</label
						>
						<div class="relative">
							<input
								v-model="email"
								type="text"
								class="form-input"
							/>
						</div>
						<p
							v-if="errors.email"
							class="text-xs text-red-600 mt-2"
							id="email-error"
						>
							{{ errors.email }}
						</p>
					</div>
					<!-- End Form Group -->

					<!-- Form Group -->
					<div>
						<div class="flex justify-between items-center">
							<label
								for="password"
								class="block text-sm mb-2 dark:text-white"
								>Password</label
							>
						</div>
						<div class="relative">
							<input
								type="password"
								v-model="password"
								name="password"
								class="form-input"
							/>
						</div>
						<p
							v-if="errors.password"
							class="text-xs text-red-600 mt-2"
							id="password-error"
						>
							{{ errors.password }}
						</p>
					</div>
					<!-- End Form Group -->

					<button
						type="submit"
						class="form-btn"
					>
						Sign in
					</button>
				</div>
			</form>
			<!-- End Form -->
		</div>
	</div>
</template>

<style scoped>
.auth-section {
	@apply relative flex items-center overflow-hidden before:absolute before:top-0 h-full before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2;
}
.google-btn {
	@apply w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800;
}
.link-to-reg {
	@apply text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500;
}
.title {
	@apply block text-2xl font-bold text-gray-800 dark:text-white;
}
.form-input {
	@apply py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600;
}
.form-btn {
	@apply w-full mt-2 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800;
}
</style>
