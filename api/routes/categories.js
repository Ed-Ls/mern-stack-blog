const router = require("express").Router();
const Category = require("../models/Category");

//CREATE CATEGORY
router.post("/", async (request, response) => {
  const newCat = new Category(request.body);
  try {
    const savedCat = await newCat.save();
    response.status(200).json(savedCat);
  } catch (error) {
    response.status(500).json();
  }
});

//GET CATEGORIES
router.get("/", async (request, response) => {
  try {
    const cats = await Category.find();
    response.status(200).json(cats);
  } catch (error) {
    response.status(500).json();
  }
});

module.exports = router;
