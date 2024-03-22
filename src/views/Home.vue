<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { tasksStore } from '@/stores/tasksStore'; // Assumi che questo sia l'hook per usare lo store
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue';
import { Task_i } from '@/interface/Task_i';

export default defineComponent({
  name: 'Home',

  components: {
    Tasks,
    AddTask,
  },

  setup() {
    const store = tasksStore();

    const showAddTask = computed(() => store.showAddTask);
    const tasks = computed(() => store.tasks);

    const addTask = async (task: Task_i) => {
      await store.addTask(task);
    };

    const deleteTask = async (id: number) => {
      await store.deleteTask(id);
    };

    const toggleReminder = async (id: number) => {
      await store.toggleReminder(id);
    };

    const fetchTasks = async () => {
      await store.fetchTasks();
    };

    onMounted(fetchTasks);

    return {
      showAddTask,
      tasks,
      addTask,
      deleteTask,
      toggleReminder,
    };
  },
});
</script>
