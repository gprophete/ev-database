const express = require('express')

const carModel = require('../models/car.js')
// const featureModel = require ('../models/feature.js')

const carRouter = express.Router()

// GET ALL Cars
carRouter.get('/', async (req, res) => {
    try {
        const allCars = await carModel.getAllCars()
        res.json(allCars)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

// GET ONE
carRouter.get('/:carId', async (req, res) => {
    try {
        const car = await carModel.getCarById(req.params.carId)
        // const featureByCarId = await featureModel.getFeatureByCarId(req.params.carId)
        res.json(car)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

// CREATE
carRouter.post('/', async (req, res) => {
    try {
        await carModel.createCar(req.body)
        res.json('ok')
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

// UPDATE
carRouter.put('/:carId', async (req, res) => {
    console.log("carId", req.params.carId)
    console.log("carData", req.body)
    try {
        await carModel.updateCar(req.params.carId, req.body)
        res.json("ok")
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})


// DELETE
carRouter.delete('/:carId', async (req, res) => {
    try {
        await carModel.deleteCar(req.params.carId)
        res.json("ok")
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

module.exports = carRouter