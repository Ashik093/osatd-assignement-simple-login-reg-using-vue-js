<template>
  <div class="p-5 bg-white md:flex-1">
    <h3 class="my-4 text-2xl font-semibold text-black">Account Login</h3>
    <form @submit.prevent="login()" class="flex flex-col space-y-5">
      <!-- Email input -->
      <div class="flex flex-col space-y-1">
        <label for="email" class="text-sm font-semibold text-black">Email address</label>
        <input
          v-model="email"
          type="email"
          id="email"
          autofocus
          class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        />
        <div class="text-red-500 text-sm" v-if="showEmailError">{{ emailError }}</div>
      </div>
      <!-- Password input -->
      <div class="flex flex-col space-y-1">
        <div class="flex items-center justify-between">
          <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
        </div>
        <input
          v-model="password"
          type="password"
          id="password"
          class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        />
        <div class="text-red-500 text-sm" v-if="showPasswordError">{{ passwordError }}</div>
      </div>
      <!-- Remember me checkbox -->
      <div class="flex items-center space-x-2">
        <input
          type="checkbox"
          id="remember"
          class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
        />
        <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
      </div>
      <!-- Submit button -->
      <div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
        >
          Log in
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import user from './../Db/user.json'
import { useRouter } from 'vue-router';
const router = useRouter();

let email = ref('');
let password = ref('');
let showEmailError = ref(false);
let emailError = ref('');

let showPasswordError = ref(false);
let passwordError = ref('');

const login = async () => {
  try {
    showEmailError.value = false;
    showPasswordError.value = false;
    if (email.value === '') {
        showEmailError.value = true;
        emailError.value = 'Please enter your email.';
        return
    } 
    if (password.value === '') {
      showPasswordError.value = true;
      passwordError.value = 'Please enter your password.';
      return
    }


    const checkUser = user.find(u => u.email === email.value && u.password === password.value);
    if (checkUser) {
      router.push('/dashboard');
    } else {
      showPasswordError.value = true;
      passwordError.value = 'Credential does not match our records.';
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>