<template>
  <div class="add-form">
    <h1>Login</h1>
    <form>
      <div class="form-control">
        <input v-model="email" type="email" placeholder="Email" required>
      </div>
      <div class="form-control">
        <input v-model="password" type="password" placeholder="Password" required>
      </div>
      <Button @btn-click="login" type="submit" :text="'Login'" class="btn btn-block"></Button>
    </form>
  </div>
</template>
  

  <script lang="ts">
  import { ref } from 'vue';
  import { userStore } from '@/stores/userStore'; // Uso uno Store specifico per gli utenti
  import  Button  from '@/components/Button.vue';
  import { useRouter } from 'vue-router'; // Importa useRouter per l'uso del router

  
  export default {
    name: 'Login',

    components: {
        Button
    },

    methods: {
      
    },

    setup() {
      const email = ref('');
      const password = ref('');
      const store = userStore();
      const router = useRouter()
  
      const login = () => {

        
        store.login(email.value, password.value);
        router.push('/home')
      };
  
      return {
        email,
        password,
        login
      };
    }
  }
  </script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
  