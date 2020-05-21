const express = require('express')

const categoryModel = require('../models/category.js')

const categoryRouter = express.Router()

// GET ALL Categorys
categoryRouter.get('/', async (req, res) => {
    try {
        const allCategories = await categoryModel.getAllCategories()
        res.json(allCategories)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

// GET ONE
categoryRouter.get('/:categoryId', async (req, res) => {
    try {
        const category = await categoryModel.getCategoryById(req.params.categoryId)
        res.json(category)
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

// CREATE
categoryRouter.post('/', async (req, res) => {
    try {
        await categoryModel.createCategory(req.body)
        res.json('ok')
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

// UPDATE
categoryRouter.put('/:categoryId', async (req, res) => {
    try {
        await categoryModel.updateCategory(req.params.categoryId, req.body)
        res.json("ok")
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})


// DELETE
categoryRouter.delete('/:categoryId', async (req, res) => {
    try {
        await categoryModel.deleteCategory(req.params.categoryId)
        res.json("ok")
    } catch (error) {
        res.json(error)
        console.log(error)
    }
})

module.exports = categoryRouter