const express = require('express')
const path = require('path')
const todoRoutes = require('./routes/todo.js')

const app = express()
const PORT = process.nextTick.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/todo', todoRoutes)

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ...`)
})
