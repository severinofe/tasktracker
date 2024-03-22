<template>
    <header>
      <h1>{{ title }}</h1>
      <Button 
        v-show="homepage"
        @click="toggleAddTask"
        :text="showAddTask ? 'Chiudi' : 'Aggiungi task'" 
        :color="showAddTask ? 'red' : 'green'"
      />
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import Button from "./Button.vue";
  import { tasksStore } from '@/stores/tasksStore'; // Assumendo che useTasksStore sia il tuo "useStore"
  
  export default defineComponent({
    name: 'AppHeader',
    components: {
      Button
    },
    props: {
      title: {
        type: String,
        default: "Task Tracker"
      }
    },
    setup(props) {
      const route = useRoute();
      const store = tasksStore();
  
      const showAddTask = computed(() => store.showAddTask);
      const homepage = computed(() => route.path === '/');
  
      const toggleAddTask = () => {
        store.toggleAddTask();
      };
  
      return { 
        showAddTask, 
        homepage, 
        toggleAddTask,
        // Distruggi props per renderle reattive e utilizzabili nel template
        ...props
      };
    }
  });
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  </style>
  