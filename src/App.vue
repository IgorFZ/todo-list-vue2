<template>
  <section class="todoapp">
    <header class="header">
      <h1>Tasks</h1>
    </header>
    <input-task></input-task>
    <task-list></task-list>
    <router-link class="cep" to="/cep">Check Zip Code</router-link>
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
  mounted () {
    this.$events.on('newTask', eventData => this.addTask(eventData))
  },
}
</script>

<style>
html,
body {
	margin: 0;
	padding: 0;
}
body {
	font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	background: #f5f5f5;
	color: #4d4d4d;
	min-width: 230px;
	max-width: 550px;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 300;
}
:focus {
	outline: 0;
}
.cep{
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 5px;
  border-top: 1px solid #ededed;
  text-align: center;
  color: gray;
}
.cep:hover {
  color: rgb(90, 89, 89);
}
.hidden {
	display: none;
}
.todoapp {
	background: #fff;
	margin: 130px 0 40px 0;
	position: relative;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
	            0 25px 50px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
.todoapp h1 {
	position: absolute;
	top: -155px;
	width: 100%;
	font-size: 100px;
	font-weight: 100;
	text-align: center;
	color: black;
	-webkit-text-rendering: optimizeLegibility;
	-moz-text-rendering: optimizeLegibility;
	text-rendering: optimizeLegibility;
}
</style>