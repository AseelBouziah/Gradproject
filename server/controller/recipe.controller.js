
const Recipe = require("../models/recipe.module.js");

// Create and Save a new rECIPE
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Recipe
    const recipe = new Recipe({
      title: req.body.title,
      integrades: req.body.integrades,
      way: req.body.way
      
    });
  
    // Save Recipe in the database
    Recipe.create(recipe, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Recipe."
        });
      else res.send(data);
    });
  };


  



// Retrieve all Recipes from the database.
exports.findAll = (req, res) => {
  
};



exports.findAll = (req, res) => {
  Recipe.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving finalfinal."
        });
      else res.send(data);
    });
  };