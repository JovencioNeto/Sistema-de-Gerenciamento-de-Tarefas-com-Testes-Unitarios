const tasks = require('../database/tasksDatabase')

function addTask(title) {
    if (!title) throw new Error("Título inválido")

    const task = {
        id: tasks.length + 1,
        title,
        completed: false
    }

    tasks.push(task)
    return task
}

function getTasks() {
    return tasks
}

function completeTask(id) {
    const task = tasks.find(t => t.id === id)
    if (!task) throw new Error("Tarefa não encontrada")

    task.completed = true
    return task
}

function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id)
    if (index === -1) throw new Error("Tarefa não encontrada")

    tasks.splice(index, 1)
}

function sortTasksAsc() {
    return [...tasks].sort((a, b) => a.title.localeCompare(b.title))
}

function sortTasksDesc() {
    return [...tasks].sort((a, b) => b.title.localeCompare(a.title))
}

module.exports = {
    addTask,
    getTasks,
    completeTask,
    deleteTask,
    sortTasksAsc,
    sortTasksDesc
}
