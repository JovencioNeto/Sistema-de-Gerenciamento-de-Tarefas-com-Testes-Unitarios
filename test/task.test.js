const service = require('../services/taskService')

describe("Sistema de Tarefas", () => {

    test("deve adicionar tarefa", () => {
        const task = service.addTask("Estudar")
        expect(task.title).toBe("Estudar")
    })

    test("não deve adicionar tarefa vazia", () => {
        expect(() => service.addTask("")).toThrow()
    })

    test("deve listar tarefas", () => {
        const tasks = service.getTasks();
        expect(tasks.length).toBeGreaterThan(0)
    })

    test("deve completar tarefa", () => {
        const task = service.addTask("Treinar")
        const updated = service.completeTask(task.id)
        expect(updated.completed).toBe(true)
    })

    test("não deve completar tarefa inexistente", () => {
        expect(() => service.completeTask(999)).toThrow()
    })

    test("deve deletar tarefa", () => {
        const task = service.addTask("Excluir")
        service.deleteTask(task.id)
        const tasks = service.getTasks()
        expect(tasks.find(t => t.id === task.id)).toBeUndefined()
    })

    test("não deve deletar tarefa inexistente", () => {
        expect(() => service.deleteTask(999)).toThrow()
    })

    test("deve ordenar A-Z", () => {
        service.addTask("B")
        service.addTask("A")

        const sorted = service.sortTasksAsc()
        expect(sorted[0].title).toBe("A")
    })

    test("deve ordenar Z-A", () => {
        const sorted = service.sortTasksDesc()
        expect(sorted[0].title).toBeDefined()
    })

    test("tarefas devem ter ID único", () => {
        const t1 = service.addTask("1")
        const t2 = service.addTask("2")

        expect(t1.id).not.toBe(t2.id)
    })

})
