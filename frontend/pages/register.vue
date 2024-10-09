<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <RegisterForm @submit="handleRegister" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RegisterForm from '../components/Auth/RegisterFrom.vue'
import type { RegisterFormSubmitPayload } from '../types/auth'

export default defineComponent({
    components: {
        RegisterForm,
    },
    setup() {
        const handleRegister = (payload: RegisterFormSubmitPayload) => {
            console.log('Register with', payload)
            window.location.href = '/login'
        }

        return { handleRegister }
    },
})
</script>

<style scoped></style>
