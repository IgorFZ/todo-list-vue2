import Vue from 'vue'
import TaskList from '../../../src/components/TaskList'
import { Task } from '../../../src/models/Task'

function getMountedComponent(Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({propsData}).$mount()
    return vm
}

describe('TaskList.vue', () => {
    let vm = {}
    beforeEach(function() {
        let taskList = []
        let task = new Task ()
        task.completed = false
        task.title = 'Example 1'
        taskList.push(task)

        task = new Task ()
        task.completed = false
        task.title = 'Example 2'
        taskList.push(task)

        vm = getMountedComponent(TaskList, {
            todoList: taskList
        })
    }),
    it('should render correct contents', () => {
        expect(vm.todoList.length).to.equal(2)
    })
    /*
    it('should alter status task to true', () => {
        let task = new Task ()
        task.completed = false
        vm.completeTask(task)
        expect(task.completed).to.be.true
    })
    */
})