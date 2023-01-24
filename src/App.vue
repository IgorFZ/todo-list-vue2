<template>
  <section class="todoapp">
    <header class="header">
      <h1>Tasks</h1>
    </header>
    <input-task></input-task>
    <task-list></task-list>
    <router-link to="/cep">CEP</router-link>
    <footer-todo>
      <p>Home MIT License</p>
    </footer-todo>
  </section>
</template>

<script>
import InputTask from './components/InputTask.vue'
import TaskList from './components/TaskList.vue'
import FooterTodo from './components/FooterTodo.vue'

export default {
  name: 'App',
  components: {
    InputTask,
    TaskList,
    FooterTodo
  },
  /*data () {
    return {
      tasks: []
    }
  },*/
  mounted () {
    this.$events.on('newTask', eventData => this.addTask(eventData))
  },/*
  methods: {
    addTask (task) {
      this.tasks.push(task)
    }
  }*/
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