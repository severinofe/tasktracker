<template>
    <div :key="task.id" v-for="task in tasks">
    <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task" />
    </div>
</template>

<script lang="ts">
import { tasksStore } from '@/stores/tasksStore';
import Task from './Task.vue'
import { defineComponent, PropType } from 'vue';
import { Task_i } from '@/interface/Task_i'; // Assicurati che il percorso sia corretto



    export default {
        name: 'Tasks',
        props: {
            tasks: {
            type: Array as PropType<Task_i[]>,
            required: true, // Aggiungi required se sai che tasks sarà sempre fornito
            default: () => [] // Fornisci un valore di default se tasks potrebbe non essere fornito
        },
        },
        components: {
            Task,
        },
        emits: ['delete-task', 'toggle-reminder']
    }
</script>