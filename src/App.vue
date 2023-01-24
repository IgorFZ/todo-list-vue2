<template>
  <section class="todoapp">
    <header class="header">
      <h1>Tasks</h1>
      <input-task @newTask="addTask"></input-task>
      <task-list :todo-list="tasks"></task-list>
      <router-link to="/cep">CEP</router-link>
    </header>
  </section>
</template>

<script>
import InputTask from './components/InputTask.vue'
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    InputTask,
    TaskList
  },
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    //this.$events.on('newTask', eventData => this.addTask(eventData))
  },
  methods: {
    addTask (task) {
      this.tasks.push(task)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>