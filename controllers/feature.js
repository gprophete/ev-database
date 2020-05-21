const express = require('express')

const featureModel = require('../models/feature.js')

const featureRouter = express.Router()

// GET ALL Features
featureRouter.get('/', async (req, res) => {
    try {
        const allFeatures = await featureModel.getAllFeatures()
        res.json(allFeatures)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

// GET ONE
featureRouter.get('/:featureId', async (req, res) => {
    try {
        const feature = await featureModel.getFeatureById(req.params.featureId)
        res.json(feature)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

// CREATE
featureRouter.post('/', async (req, res) => {
    try {
        await featureModel.createFeature(req.body)
        res.json('ok')
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

// UPDATE
featureRouter.put('/:featureId', async (req, res) => {
    try {
        await featureModel.updateFeature(req.params.featureId, req.body)
        res.json("ok")
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})


// DELETE
featureRouter.delete('/:featureId', async (req, res) => {
    try {
        await featureModel.deleteFeature(req.params.featureId)
        res.json("ok")
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

module.exports = featureRouter