import { date, capitalize } from './filters.js'
import { addTodo } from './methods.js'

function pluralizeTasks(count) {
    if (count === 1) {
        return 'задача'
    } else if (count >= 2 && count <= 4) {
        return 'задачи'
    } else {
        return 'задач'
    }
}

function updateTaskList(todos) {
    const cardCountElement = document.getElementById('card-count')
    const todosLenght = state.todos.length
    cardCountElement.textContent = `${todosLenght} ${pluralizeTasks(
        todosLenght
    )}`

    const ordersTitleElement = document.getElementById('orders-title')
    ordersTitleElement.textContent = 'Ваши задачи:'

    const taskListElement = document.getElementById('task-list')
    // Очищаем предыдущий список задач
    taskListElement.innerHTML = ''

    // Перебираем задачи в объекте state.todos и добавляем их на страницу
    todos.forEach((todo) => {
        const taskElement = document.createElement('div')
        taskElement.textContent = todo.title
        taskListElement.appendChild(taskElement)
    })
}

const state = {
    show: true,
    todos: [],
}

document.addEventListener('DOMContentLoaded', function () {
    const cardTitle = document.getElementById('card-title')
    cardTitle.textContent = date()

    const orderNameInput = document.getElementById('order_name')
    const labelOrderName = document.getElementById('label_order_name')

    orderNameInput.addEventListener('input', function () {
        if (orderNameInput.value) {
            labelOrderName.textContent = 'Задача:'
        } else {
            labelOrderName.textContent = ''
        }
    })

    const form = document.querySelector('form') // Найдите вашу форму по селектору
    form.addEventListener('submit', function (event) {
        // Предотвращаем стандартное действие отправки формы
        event.preventDefault()

        // Здесь можно выполнить ваш код для добавления задачи (addTodo)
        addTodo.call(state, orderNameInput.value)

        // Очищаем поле ввода
        orderNameInput.value = ''
        // Восстанавливаем текст label
        labelOrderName.textContent = ''

        // Обновляем содержимое элемента "task-list" на странице
        updateTaskList(state.todos)
    })
})
