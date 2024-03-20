import { defineStore } from 'pinia'
import Task from '@/components/Task.vue'
import { Task_i }  from '@/interface/Task_i'

export const tasksStore = defineStore({
    id: 'tasksStore',
    state:()=>({
        tasks: [] as Task_i[],
        showAddTask: true
    }),

    getters:{
        

    },
    actions:{


        toggleAddTask() {
          this.showAddTask = !this.showAddTask;
        },


        async addTask(task : Task_i) {
            try{ const res = await fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json',
                },
                body: JSON.stringify(task),        
              })
    
              if (!res.ok) {
                throw new Error('Errore nella risposta');
              }
              const data = await res.json()
              this.tasks.push(data)
            }
            catch (error) {
            console.error('Errore nella fetch: ', error);
            }
          },


        async fetchTasks() {
            const res = await fetch('http://localhost:5000/tasks')
      
            this.tasks = await res.json()
      
            
          },
          async deleteTask(id: number) {
            if (confirm('Are you sure?')) {
              const res = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: 'DELETE',
              })
      
              res.status === 200
                ? (this.tasks = this.tasks.filter((task) => task.id !== id))
                : alert('Error deleting task')
            }
          },

          async toggleReminder(id : number) {

            const taskToToggle  = this.tasks.find(task => task.id === id);
                // TypeScript ora capisce che taskToToggle può essere Task_i o undefined
                if (taskToToggle === undefined) {
                    console.error(`Task with id ${id} not found`);
                    return; // Esci dalla funzione se il task non è trovato
                }
                // Da questo punto in poi, TypeScript sa che taskToToggle è di tipo Task_i e non undefined
                const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
  
      
            const res = await fetch(`http://localhost:5000/tasks/${id}`, {
              method: 'PUT',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify(updTask),
            })
      
            const data = await res.json()
      
            this.tasks = this.tasks.map((task) =>
              task.id === id ? { ...task, reminder: data.reminder } : task
            )
          },
    }
})