const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = process.nextTick.PORT || 3000

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    res.sendFile('/index.html')
})

app.listen(PORT)
