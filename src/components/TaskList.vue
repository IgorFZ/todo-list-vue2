<template>
    <ul class="todo-list">
        <li v-for="(task, index) in sortedTasks" :key="index" class="task">
            <div class="view">
                <input type="checkbox" class="toggle" @click="completeTask(task)">
                <label v-if="task.completed" class="todo-completed">{{ task.title }}</label>
                <label v-else > {{ task.title }} </label>
            </div>
        </li>
    </ul>
</template>

<script>

export default {
    props: ['todoList'],
    computed: {
        sortedTasks: {
            get: function () {
                let sorted = this.todoList.slice()
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
            task.completed = !task.completed
        }
    }
}
</script>

<style>

.todo-completed {
    text-decoration: line-through;
}

</style>