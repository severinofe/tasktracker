import { defineStore } from 'pinia';

export const userStore = defineStore({
  id: 'auth',
  state: () => ({
    loggato: false,
   
  }),
  actions: {
    login(email : string, password : string) {
      // Logica di login mancante ancora
      if (email && password) {
        this.loggato = true;
    
      }
    },
    logout() {
      this.loggato = false;

    },
  }
});
