<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Aggiungi Task" />
    </div>
    <div class="form-control">
      <label>Data e Ora</label>
      <input type="text" v-model="day" name="day" placeholder="Aggiungi Data e Ora" />
    </div>
    <div class="form-control form-control-check">
      <label>Imposta Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AddTask',
  setup(props, { emit }) {
    const text = ref("");
    const day = ref("");
    const reminder = ref(false);

    function onSubmit(e: Event) {
      e.preventDefault();

      if (!text.value) {
        alert('Per favore, aggiungi un task');
        return;
      }

      const newTask = {
        text: text.value,
        day: day.value,
        reminder: reminder.value,
      };

      console.log(newTask);
      emit('add-task', newTask);

      text.value = '';
      day.value = '';
      reminder.value = false;
    }

    return {
      text,
      day,
      reminder,
      onSubmit,
    };
  },
  emits: ['add-task']
});
</script>

<style scoped>
/* Stili rimangono invariati */
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
