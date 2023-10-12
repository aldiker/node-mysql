export function addTodo(title) {
    const order_title = title.trim()
    if (!order_title) {
        return
    }
    this.todos.push({
        title: order_title,
        id: Math.random(),
        done: false,
        date: new Date(),
    })
}

export function removeTodo(id) {
    this.todos = this.todos.filter((t) => t.id.toString() !== id.toString())
}
