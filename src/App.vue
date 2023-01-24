<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>Tasks</h1>
        <input-task @newTask="addTask"></input-task>
        <task-list :todo-list="tasks"></task-list>
      </header>
    </section>
    <router-view/>
  </div>
</template>

<script>
import InputTask from './components/InputTask.vue'
import TaskList from './components/TaskList.vue'
import { Task } from './models/Task'

let tasks = []
let task = new Task ()
task.completed = false
task.title = 'Example 1'
tasks.push(task)

task = new Task ()
task.completed = false
task.title = 'Example 2'
tasks.push(task)

console.log(tasks)

export default {
  name: 'App',
  components: {
    InputTask,
    TaskList
  },
  data () {
    return {
      tasks: tasks
    }
  },
  methods: {
    addTask (task) {
      this.tasks.push(task)
    }
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>