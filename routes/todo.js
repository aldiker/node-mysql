const { Router } = require('express')

const Todo = require('../models/todo.js')
const router = Router()

// Получение списка задач
router.get('/', (req, res) => {
    res.json({
        a: 1,
    })
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
router.put('/:id', (req, res) => {})

// Удаление задачи
// Нажатие кнопки "Удалить"
router.delete('/:id', (req, res) => {})

module.exports = router
