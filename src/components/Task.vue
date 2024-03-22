<template>
  <div @dblclick="toggleReminder" :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      {{ task.text }}
      <i @click="deleteTask" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Task_i } from '@/interface/Task_i';

export default defineComponent({
  name: 'Task',
  props: {
    task: {
      type: Object as PropType<Task_i>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const toggleReminder = () => {
      emit('toggle-reminder', props.task.id);
    };

    const deleteTask = () => {
      emit('delete-task', props.task.id);
    };

    // Non è necessario restituire le props, perché sono automaticamente accessibili nel template
    return {
      toggleReminder,
      deleteTask,
    };
  },
});
</script>

<style scoped>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
