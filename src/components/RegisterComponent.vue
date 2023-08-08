<template>
    <div class="p-5 bg-white md:flex-1">
      <h3 class="my-4 text-2xl font-semibold text-black">Create New Account</h3>
      <form @submit.prevent="register" class="flex flex-col space-y-5">
        <div class="flex flex-col space-y-1">
          <label for="name" class="text-sm font-semibold text-black">Name</label>
          <input
            v-model="name"
            type="text"
            id="name"
            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
          />
          <div class="text-red-500 text-sm" v-if="showNameError">{{ nameError }}</div>
        </div>
        <div class="flex flex-col space-y-1">
          <label for="email" class="text-sm font-semibold text-black">Email address</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
          />
          <div class="text-red-500 text-sm" v-if="showEmailError">{{ emailError }}</div>
        </div>
        <div class="flex flex-col space-y-1">
          <label for="password" class="text-sm font-semibold text-black">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
          />
          <div class="text-red-500 text-sm" v-if="showPasswordError">{{ passwordError }}</div>
          <div v-if="successMessage" class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <span class="font-medium">{{ showSuccessMessage }}</span> 
          </div>
          
        </div>
        <div>
          <button
            type="submit"
            class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
    import user from '../Db/user.json';

  const name = ref('');
  const email = ref('');
  const password = ref('');
  
  const showNameError = ref(false);
  const nameError = ref('');

  const showSuccessMessage = ref(false);
  const successMessage = ref('');
  
  const showEmailError = ref(false);
  const emailError = ref('');
  
  const showPasswordError = ref(false);
  const passwordError = ref('');
  
  const register = async () => {
    try {
        showNameError.value = false;
        showEmailError.value = false;
        showPasswordError.value = false;
        successMessage.value = false;
    
        
        if (name.value === '') {
            showNameError.value = true;
            nameError.value = 'Please enter your name.';
            return;
        }
    
        if (email.value === '') {
            showEmailError.value = true;
            emailError.value = 'Please enter your email.';
            return;
        }
    
        if (password.value === '') {
            showPasswordError.value = true;
            passwordError.value = 'Please enter your password.';
            return;
        }

        const newUser = {
            name: name.value,
            email: email.value,
            password: password.value
        };

      const existingUser = user.find(u => u.email === newUser.email);
      if (existingUser) {
        showEmailError.value = true;
        emailError.value = 'Email already registered.';
        return;
      }
  
      user.push(newUser);
      showSuccessMessage.value="Regisration success. Please login"
      successMessage.value=true

      name.value=''
        email.value=''
        password.value=''
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>