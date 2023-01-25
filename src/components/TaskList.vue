<template>
    <ul class="todo-list">
        <transition-group name="fade">
            <li v-for="task in sortedTasks" :key="task.title" class="task"> <!--Navegador e o Terminal ficavam incomdodando com o index-->
                <div class="view">
                    <input type="checkbox" class="toggle" @click="completeTask(task)">
                    <label v-if="task.completed" class="todo-completed">{{ task.title }}</label>
                    <label v-else > {{ task.title }} </label>
                </div>
            </li>
        </transition-group>
    </ul>
</template>

<script>

export default {
    props: ['todoList'],
    computed: {
        sortedTasks: {
            get: function () {
                let sorted = this.$store.state.tasks
                return sorted.sort(function (a, b) {
                    if (a.title < b.title) return -1
                    if (a.title > b.title) return 1
                    return 0
                })
            },
            set: function () {
                this.todoList.concat(newList)
            }
        }
    },
    methods: {
        completeTask (task) {
            //task.completed = !task.completed
            this.$store.commit('completeTask', {task})
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

.todo-list {
	margin: 20px;
	padding: 0;
	list-style: none;
}
.todo-list li {
	position: relative;
	font-size: 24px;
	border-bottom: 1px solid #ededed;
}
.todo-completed{
  text-decoration: line-through;
}
.todo-list li .toggle {
	text-align: center;
	width: 30px;
	/* auto, since non-WebKit browsers doesn't support input styling */
	height: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
}
.todo-list li label {
	word-break: break-all;
	padding: 15px 60px 15px 15px;
	margin-left: 45px;
	display: block;
	line-height: 1.2;
	transition: color 0.4s;
}
</style>