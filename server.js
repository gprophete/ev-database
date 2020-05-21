const express = require('express')

const app = express()

const carRouter = require('./controllers/car.js')

app.use(express.json())

app.get('/', (req, res) =>{
    res.json('Ok')
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log(`App is listening on ${PORT}`)
})