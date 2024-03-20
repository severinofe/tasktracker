<template>
    <AddTask v-show="showAddTask" @add-task="addTask" />
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </template>
  
  <script>
  import { tasksStore } from '@/stores/tasksStore.ts';
  import Tasks from '../components/Tasks'
  import AddTask from '../components/AddTask'
  export default {
    name: 'Home',
 
    components: {
      Tasks,
      AddTask,
    },
   
    computed:
      {

        showAddTask() {
          const store = tasksStore();
          return store.showAddTask;
        },
        
        tasks()
        {
          const store = tasksStore();
          console.log(store.tasks)
          return store.tasks;
        }
      },
    methods: {
      async addTask(task) {
        const store =tasksStore()
          await store.addTask(task)
        

      },
      async deleteTask(id) {
          const store =tasksStore()
          await store.deleteTask(id)
      },
      async toggleReminder(id) {
        const store = tasksStore();
        await store.toggleReminder(id)
      },
      async fetchTasks() {
        const store = tasksStore();
        console.log(store);
        await store.fetchTasks();
        console.log(store.tasks);
      },
       fetchTask(id) {
        const store=tasksStore()
        return store.tasks[id]
      },
    },
    async created() {
      await this.fetchTasks()
    },
  }
  </script>