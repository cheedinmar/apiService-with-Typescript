<template>
	<div
		class="min-h-screen bg-no-repeat bg-cover bg-center"
		style="background-image: url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"
	>
		<div class="flex justify-end">
			<div class="bg-white min-h-screen w-1/2 flex justify-center items-center">
				<div>
					<form>
						<div>
							<span class="text-sm text-gray-900">Welcome back</span>
							<h1 class="text-2xl font-bold">Login to your account</h1>
						</div>
						<div class="mt-5">
							<label class="block text-md mb-2" for="username">Username</label>
							<input
								class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
								type="text"
								v-model="username"
								name="username"
								placeholder="username"
							/>
						</div>
						<div class="my-3">
							<label class="block text-md mb-2" for="password">Password</label>
							<input
								class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
								type="password"
								v-model="password"
								name="password"
								placeholder="password"
							/>
						</div>
						<div class>
							<button
								class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
								@click.prevent="login"
							>Login now</button>
						</div>
					</form>
					<p class="mt-8">
						Dont have an account?
						<span class="cursor-pointer text-sm text-blue-600">Join free today</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { IUserData } from '@/types/dataTypes';
import { apiService } from '@/services/apiService';
import { ILoginResponse } from '@/types/apiTypes';
import { useRouter, useRoute } from 'vue-router'

const api = new apiService()
const router = useRouter()
const username = ref<string>("")
const password = ref<string>("")
const token = ref<string>("")

function login(event: MouseEvent): void {
	if (username.value == "" || password.value == "") {
		alert("Please fill in all the fields")
	} else {
		const userData: IUserData = {
			username: username.value,
			password: password.value
		}
		api.postRequest("/auth/login", userData).then((response: ILoginResponse) => {
			token.value = response.token;
			localStorage.setItem("token", token.value);
		 router.push("/")
			return token.value

		})
		 
		 


	}
}
</script>