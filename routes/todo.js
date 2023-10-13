const { Router } = require('express')
const router = Router()

// Получение списка задач
router.get('/', (req, res) => {
    res.json({
        a: 1,
    })
})

// Создание новой задачи
router.post('/', (req, res) => {})

// Изменение состояния определенной задачи
// Нажатие на чекбокс - задача выполнена/невыполнена
router.put('/:id', (req, res) => {})

// Удаление задачи
// Нажатие кнопки "Удалить"
router.delete('/:id', (req, res) => {})

module.exports = router
