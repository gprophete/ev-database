const mongoose = require ('../db/connection.js')

const CategorySchema = new mongoose.Schema({

    class: String,
})

const CategoryModel = mongoose.model('category', CategorySchema)

//Get all categories
function getAllCategories() {
    return CategoryModel.find()
}

//Get one category
function getCategoryById(categoryId) {
    return CategoryModel.findById(categoryId)
}
//Create a category
function createCategory(categoryData) {
    return CategoryModel.create(categoryData)
}
//Update a category
function updateCategory(categoryId, categoryData) {
    return CategoryModel.findByIdAndUpdate(categoryId, categoryData)
}
//Delete a category
function deleteCategory(categoryId) {
    return CategoryModel.findByIdAndDelete(categoryId)
}

module.exports= {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}
