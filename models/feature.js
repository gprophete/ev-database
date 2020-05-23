const mongoose = require ('../db/connection.js')

const FeatureSchema = new mongoose.Schema({

    battery: String,
    range: String,
    safety: String,
    topSpeed: String,
})

const FeatureModel = mongoose.model('feature', FeatureSchema)

//Get all features
function getAllFeatures() {
    return FeatureModel.find()
}

//Get one feature
function getFeatureById(featureId) {
    return FeatureModel.findById(featureId)
}
//Create a feature
function createFeature(featureData) {
    return FeatureModel.create(featureData)
}
//Update a feature
function updateFeature(featureId, featureData) {
    return FeatureModel.findByIdAndUpdate(featureId, featureData)
}
//Delete a feature
function deleteFeature(featureId) {
    return FeatureModel.findByIdAndDelete(featureId)
}

module.exports= {
    getAllFeatures,
    getFeatureById,
    createFeature,
    updateFeature,
    deleteFeature
}
