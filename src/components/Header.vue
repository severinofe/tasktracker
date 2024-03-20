<template>
    <header>
        <h1>{{title}}</h1>
        <Button 
        v-show="homepage"
        @click="toggleAddTask"
        :text="showAddTask? 'Chiudi' : 'Aggiungi task'" 
        :color= "showAddTask? 'red' : 'green'"/>
    </header>
</template>

<script>
import Button from "./Button"
import { tasksStore } from '@/stores/tasksStore.ts';
export default {
    name: 'AppHeader',
    props: {
        title :{
            type: String,
            default: "Task Tracker"
        },
       // showAddTask: Boolean 
    },
    components: {
        Button
    },
    computed: {
        showAddTask() {
            const store = tasksStore(); // Accedi allo store Pinia
            return store.showAddTask; // Restituisci lo stato showAddTask
        },
        homepage() {
            if(this.$route.path === '/') {
                return true
            } else return false
        }
    },
    methods: {
        toggleAddTask() {
      const store = tasksStore();
      store.toggleAddTask();
    },
    }

}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>