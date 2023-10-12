import { date, pluralizeTasks, capitalize } from './filters.js'
import { addTodo } from './methods.js'

function updateTaskList(todos) {
    // Длина массива задач
    const todosLenght = state.todos.length

    const cardCountElement = document.getElementById('card-count')
    cardCountElement.textContent = `${todosLenght} ${pluralizeTasks(
        todosLenght
    )}`

    const ordersTitleElement = document.getElementById('orders-title')
    if (todosLenght) {
        ordersTitleElement.textContent = 'Ваши задачи:'
    } else {
        ordersTitleElement.textContent = 'У Вас 0 задач, добавьте новую'
    }

    // Берем элемент, куда будем закидывать задачи
    const taskListElement = document.getElementById('task-list')
    // Очищаем предыдущий список задач
    taskListElement.innerHTML = ''

    // Перебираем задачи в объекте state.todos и добавляем их на страницу
    todos.forEach((todo, index) => {
        const taskElement = document.createElement('div')
        // Генерируем уникальный ID для каждого чекбокса
        const checkboxId = `checkbox-${index}`
        const buttonDeleteId = `btn-delete-${index}`

        taskElement.innerHTML = `
            <div class="task">

                <label>
                    <input
                        type="checkbox"
                        class="filled-in"
                        ${todo.done ? 'checked="checked"' : ''}
                        id="${checkboxId}"
                    />
                    <span></span>
                </label>

                <div class="task-details">
                    <p 
                        class="${todo.done ? 'order-done' : ''}"
                        style="font-size: 16px"
                        >
                            ${todo.title}
                    </p>
                    <p 
                        class="task-date" 
                        style="font-size: 10px"
                        > 
                            Добавлено в: ${date(todo.date)}
                    </p>
                </div>

                <button 
                    class="btn waves-effect waves-light" 
                    name="delete" 
                    data-todo-id="${todo.id}"
                    id="${buttonDeleteId}"
                >
                    Удалить
                </button>
            </div>
            
            <br>
        `
        // Добавляем сформированный <div> элемент в список задач
        taskListElement.appendChild(taskElement)

        // Добавляем слушатель событий для чекбокса
        const checkbox = document.getElementById(checkboxId)
        checkbox.addEventListener('change', (event) => {
            // Обновляем значение todo.done в соответствии с состоянием чекбокса
            todo.done = event.target.checked
            // Вызываем функцию обновления списка задач после изменения
            updateTaskList(state.todos)
        })

        // Добавляем слушатель событий для кнопки удалить
        const deleteButton = document.getElementById(buttonDeleteId)
        deleteButton.addEventListener('click', function () {
            // Берем индекс задачи, которую надо удалить
            const todoId = this.getAttribute('data-todo-id')
            // Находим индекс задачи в массиве по todoId и удаляем ее
            const todoIndex = state.todos.findIndex(
                (t) => t.id.toString() === todoId.toString()
            )
            // Если нашли, то удаляем один элемент начиная с найденного индекса
            if (todoIndex !== -1) {
                state.todos.splice(todoIndex, 1)
            }
            // После удаления задачи, обновляем отображение списка задач
            updateTaskList(state.todos)
        })
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

    // Найдите вашу форму по селектору
    const form = document.querySelector('form')
    form.addEventListener('submit', function (event) {
        // Предотвращаем стандартное действие отправки формы
        event.preventDefault()

        // Здесь можно выполнить ваш код для добавления задачи (addTodo)
        addTodo.call(state, capitalize(orderNameInput.value))

        // Очищаем поле ввода
        orderNameInput.value = ''
        // Восстанавливаем текст label
        labelOrderName.textContent = ''

        // Обновляем содержимое элемента "task-list" на странице
        updateTaskList(state.todos)
    })
})
