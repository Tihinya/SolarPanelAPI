<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <LoginForm @submit="handleLogin" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from '../components/Auth/LoginForm.vue'

export default defineComponent({
    components: {
        LoginForm,
    },
    setup() {
        const handleLogin = ({
            email,
            password,
        }: {
            email: string
            password: string
        }) => {
            // Simulate login and store token
            if (email && password) {
                localStorage.setItem('token', 'dummyToken')
                window.location.href = '/'
            } else {
                alert('Invalid login details')
            }
        }

        return { handleLogin }
    },
})
</script>
