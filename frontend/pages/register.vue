<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Register</h1>
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
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            class="mt-2 p-3 w-full border border-gray-300 rounded-lg"
          />
        </div>
        <div class="mb-6">
          <label for="confirmPassword" class="block text-gray-700"
            >Confirm Password</label
          >
          <input
            v-model="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            class="mt-2 p-3 w-full border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white py-3 px-4 rounded-lg w-full hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
      <p class="mt-4 text-center">
        Already have an account?
        <nuxt-link to="/login" class="text-blue-500 hover:underline"
          >Login here</nuxt-link
        >.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const email = ref<string>("");
    const password = ref<string>("");
    const confirmPassword = ref<string>("");

    const onSubmit = () => {
      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return;
      }
      // Perform registration logic here (call service)
      console.log("Register with", {
        email: email.value,
        password: password.value,
      });
    };

    return { email, password, confirmPassword, onSubmit };
  },
});
</script>

<style scoped></style>
