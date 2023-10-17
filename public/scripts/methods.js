export function addTodo(title) {
    const order_title = title.trim()
    if (!order_title) {
        return
    }
    // this.todos.push({
    //     title: order_title,
    //     id: Math.random(),
    //     done: false,
    //     date: new Date(),
    // })

    fetch('/api/todo', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: order_title }),
    })
        .then((res) => res.json())
        .then(({ todo }) => {
            console.log(todo)
            this.todos.push(todo)
        })
}

export function removeTodo(id) {
    this.todos = this.todos.filter((t) => t.id.toString() !== id.toString())
}
