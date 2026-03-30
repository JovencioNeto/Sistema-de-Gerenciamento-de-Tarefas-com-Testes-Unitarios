const service = require('../services/taskService')

function createTask(data) {
    return service.addTask(data.title)
}

function listTasks() {
    return service.getTasks()
}

module.exports = {
    createTask,
    listTasks
}
