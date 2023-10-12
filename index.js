const express = require('express')
const path = require('path')

const app = express()
const PORT = process.nextTick.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

// app.use((req, res, next) => {
//     res.sendFile('/index.html')
// })

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ...`)
})
