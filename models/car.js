const mongoose = require ('../db/connection.js')

const CarSchema = new mongoose.Schema({

    make: String,
    model: String,
    bodyType: String,
    year: String,
    price: Number
})

const CarModel = mongoose.model('car', CarSchema)

//Get all cars
function getAllCars() {
    return CarModel.find()
}

//Get one car
function getCarById(carId) {
    return CarModel.findById(carId)
}
//Create a car
function createCar(carData) {
    return CarModel.create(carData)
}
//Update a car
function updateCar(carId, carData) {
    return CarModel.findByIdAndUpdate(carId, carData)
}
//Delete a car
function deleteCar(carId) {
    return CarModel.findByIdAndDelete(carId)
}

module.exports= {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
}
