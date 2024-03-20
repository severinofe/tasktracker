<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required>
        <input v-model="password" type="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { userStore } from '@/stores/userStore'; // Uso uno Store specifico per gli utenti
  
  export default {
    name: 'Login',

    setup() {
      const email = ref('');
      const password = ref('');
      const store = userStore();
  
      const login = () => {
        store.login(email.value, password.value);
      };
  
      return {
        email,
        password,
        login
      };
    }
  }
  </script>
  