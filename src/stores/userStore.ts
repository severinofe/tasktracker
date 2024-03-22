import { defineStore } from 'pinia';

export const userStore = defineStore({
  id: 'userStore',
  state: () => ({
    loggato: false,
   
  }),
  actions: {
    login(email: string, password: string) {
      // Controllo sul formato dell'email
      const emailRegex  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailValida = emailRegex.test(email);

      // Controllo sulla forza della password (esempio: lunghezza minima 8 caratteri)
      const passwordValida = password.length >= 8;

      // Verifica sia email che password
      if (emailValida && passwordValida) {
        this.loggato = true;
        console.log('sei nello userStore', 'loggato: ' + this.loggato, 'email: ' + email, 'password: ' + password);
      } else {
        if(!emailValida)
        console.error('Email non valida');
      else console.error('Password non valida');
      }
    },
    logout() {
      this.loggato = false;
    },
  }
});
