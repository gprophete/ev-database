const mongoose = require('../db/connection.js')

const BenefitSchema = new mongoose.Schema({

    car: String,
    maintenanceCost: Number,
    savings: Number,

})

const BenefitModel = mongoose.model('benefit', BenefitSchema)

//Get all benefits
function getAllBenefits() {
    return BenefitModel.find()
}

//Get one benefit
function getBenefitById(benefitId) {
    return BenefitModel.findById(benefitId)
}
//Create a benefit
function createBenefit(benefitData) {
    return BenefitModel.create(benefitData)
}
//Update a benefit
function updateBenefit(benefitId, benefitData) {
    return BenefitModel.findByIdAndUpdate(benefitId, benefitData)
}
//Delete a benefit
function deleteBenefit(benefitId) {
    return BenefitModel.findByIdAndDelete(benefitId)
}

module.exports = {
    getAllBenefits,
    getBenefitById,
    createBenefit,
    updateBenefit,
    deleteBenefit
}
