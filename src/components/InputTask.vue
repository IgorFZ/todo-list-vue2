<template>
    <div>
        <transition appear name="fade">
            <input type="text" class="new-todo" @keyup.enter="addTask" placeholder="What do you need to do?">
        </transition>
    </div>
</template>


<script>
import { Task } from '../models/Task'

export default {
    data () {
        return {

        }
    },
    methods: {
        addTask ($event) {
            let value = $event.target.value
            let task = this.createTask(value)
            this.broadcast(task)
            this.clearField($event)
        },
        createTask (value) {
            let task = new Task()
            task.completed = false
            task.title = value
            return task
        },
        broadcast (task) {
            this.$emit('newTask', task)
        },
        clearField () {
            this.$el.querySelector('input').value = ''
        }
    }
}
</script>

<style>
</style>