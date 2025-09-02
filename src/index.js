const express = require('express')
const app = express()
const PORT = 4200

app.use(express.static('src/public'))

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))