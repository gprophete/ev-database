const express = require('express')

const benefitModel = require('../models/benefit.js')

const benefitRouter = express.Router()

// GET ALL Benefits
benefitRouter.get('/', async (req, res) => {
    try {
        const allBenefits = await benefitModel.getAllBenefits()
        res.json(allBenefits)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

// GET ONE
benefitRouter.get('/:benefitId', async (req, res) => {
    try {
        const benefit = await benefitModel.getBenefitById(req.params.benefitId)
        res.json(benefit)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

// CREATE
benefitRouter.post('/', async (req, res) => {
    try {
        await benefitModel.createBenefit(req.body)
        res.json('ok')
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

// UPDATE
benefitRouter.put('/:benefitId', async (req, res) => {
    try {
        await benefitModel.updateBenefit(req.params.benefitId, req.body)
        res.json("ok")
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})


// DELETE
benefitRouter.delete('/:benefitId', async (req, res) => {
    try {
        await benefitModel.deleteBenefit(req.params.benefitId)
        res.json("ok")
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

module.exports = benefitRouter