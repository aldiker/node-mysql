const { Router } = require('express')

const Todo = require('../models/todo.js')
const router = Router()

// Получение списка задач
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll()
        res.status(200).json(todos)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Server error',
        })
    }
})

// Создание новой задачи
router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create({
            title: req.body.title,
            done: false,
        })
        res.status(201).json({ todo })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Server error',
        })
    }
})

// Изменение состояния определенной задачи
// Нажатие на чекбокс - задача выполнена/невыполнена
router.put('/:id', async (req, res) => {
    console.log(`! - put: req.params.id = ${req.params.id}`)

    try {
        const todo = await Todo.findByPk(+req.params.id)

        console.log(`! - put: todo = ${todo}`)

        todo.done = req.body.done
        await todo.save()
        res.status(200).json({ todo })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Server error',
        })
    }
})

// Удаление задачи
// Нажатие кнопки "Удалить"
router.delete('/:id', (req, res) => {})

module.exports = router
