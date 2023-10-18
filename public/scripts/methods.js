export function addTodo(title, successCallback) {
    const order_title = title.trim()
    if (!order_title) {
        return
    }

    fetch('/api/todo', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: order_title }),
    })
        .then((res) => res.json())
        .then(({ todo }) => {
            console.log(todo)
            this.todos.push(todo)
            successCallback()
        })
        .catch((e) => console.log(e))
}

export function removeTodo(id) {
    this.todos = this.todos.filter((t) => t.id.toString() !== id.toString())
}

export function completeTodo(id, done) {
    console.log(`! - completeTodo: id = ${id}`)

    fetch('/api/todo/' + id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done: done }),
    })
        .then((res) => res.json())
        .then(({ todo }) => {
            console.log(todo)
        })
        .catch((e) => console.log(e))
}
