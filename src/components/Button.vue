<template>
    <button @click="onClick" :style="{ background: color }" class="btn">{{ text }}</button>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'Button',
    props: {
      text: {
        type: String as PropType<string>,
        required: true
      },
      color: {
        type: String as PropType<string>,
        required: false // Rendi questo prop facoltativo se lo desideri
      },
    },
    setup(props, { emit }) {
      // Metodo onClick definito dentro setup
      const onClick = () => {
        emit('btn-click');
      };
  
      // Ritorna tutto ciò che deve essere accessibile nel template
      return {
        onClick,
        ...props,
      };
    },
    emits: ['btn-click']
  });
  </script>
  
  <style scoped>
  
  </style>
  