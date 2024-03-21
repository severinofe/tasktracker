<template>
<button v-on:click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
    import { tasksStore } from '@/stores/tasksStore.ts';
    export default {
        name: 'Button',
        props: 
        {
            text: String,
            color: String,
        },

        methods: {
            onClick() {
                this.$emit('btn-click');
            }
        },

       

    }
    
    
    


</script>