const {mongoose} = require('./database')
const express = require('express')
const cors = require('cors')
const app = express()

app.get('/', (req, res) => res.send('welcome to server'))

app.use(cors())
app.use(express.json())

app.use('/api/products', require('./routes/products.routes'))

app.listen(5000, () => {
    console.log(`server is listing in port ${5000}`)
})