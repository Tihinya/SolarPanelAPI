<template>
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
        <form @submit.prevent="onSubmit">
            <div class="mb-4">
                <label for="email" class="block text-gray-700">Email</label>
                <input
                    v-model="email"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    class="mt-2 p-3 w-full border border-gray-300 rounded-lg"
                />
            </div>
            <div class="mb-6">
                <label for="password" class="block text-gray-700"
                    >Password</label
                >
                <input
                    v-model="password"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    class="mt-2 p-3 w-full border border-gray-300 rounded-lg"
                />
            </div>
            <button
                type="submit"
                class="bg-blue-500 text-white py-3 px-4 rounded-lg w-full hover:bg-blue-600 transition"
            >
                Login
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { LoginFormSubmitPayload } from '../../types/auth'

export default defineComponent({
    emits: ['submit'],
    setup(_, { emit }) {
        const email = ref<string>('')
        const password = ref<string>('')

        const onSubmit = () => {
            if (email.value && password.value) {
                const payload: LoginFormSubmitPayload = {
                    email: email.value,
                    password: password.value,
                }
                emit('submit', payload)
            } else {
                alert('Please enter valid credentials')
            }
        }

        return { email, password, onSubmit }
    },
})
</script>
