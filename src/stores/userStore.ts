import { defineStore } from 'pinia';

export const userStore = defineStore({
  id: 'userStore',
  state: () => ({
    loggato: false,
   
  }),
  actions: {
    login() {


      console.log('sei nello userStore', this.loggato);
      
        
        this.loggato = true;
    
   //   }
    },
    logout() {
      this.loggato = false;

    },
  }
});
