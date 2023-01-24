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

.todo-completed {
    text-decoration: line-through;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

</style>