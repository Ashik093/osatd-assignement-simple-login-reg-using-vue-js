<template>
  <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
    <div
      class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div
        class="p-4 py-6 text-white  md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
      >
        
       
        <p v-show="showLoginForm" class="flex flex-col items-center justify-center mt-10 text-center text-black">
          <span>Don't have an account?</span>
          <a href="#" class="underline text-black" @click="toggleForm('register')">Register</a>
        </p>

        <p v-show="showRegisterForm" class="flex flex-col items-center justify-center mt-10 text-center text-black">
          <span>Already have an account?</span>
          <a href="#" class="underline text-black" @click="toggleForm('login')">Login</a>
        </p>
       
      </div>
      <LoginComponent v-if="showLoginForm"></LoginComponent>
      <RegisterComponent v-if="showRegisterForm"></RegisterComponent>
    </div>
  </div>
</template>

<script setup>

import {ref} from 'vue'
import LoginComponent from './../components/LoginComponent.vue';
import RegisterComponent from './../components/RegisterComponent.vue';
let showLoginForm = ref(true)
let showRegisterForm = ref(false)

const toggleForm=(form)=>{
  if(form==='login'){
    showLoginForm.value = true
    showRegisterForm.value = false
  }else{
    showLoginForm.value = false
    showRegisterForm.value = true
  }
}

</script>