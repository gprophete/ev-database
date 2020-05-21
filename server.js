const express = require('express')

const app = express()

const carRouter = require('./controllers/car.js')
const categoryRouter = require('./controllers/category.js')
const featureRouter = require('./controllers/feature.js')
const benefitRouter = require('./controllers/benefit.js')

app.use(express.json())



app.use("car", carRouter)
app.use("category", categoryRouter)
app.use("benefit", benefitRouter)
app.use("feature", featureRouter)



const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log(`App is listening on ${PORT}`)
})