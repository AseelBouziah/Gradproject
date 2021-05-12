const sql = require("./db.js");

// constructor
const Recipe = function(recipe) {
  this.title = recipe.title;
  this.integrades = recipe.integrades;
  this.way = recipe.way;

};


Recipe.create = (newRecipe, result) => {
    sql.query("INSERT INTO recipe SET ?", newRecipe, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created recipe: ", { id: res.insertId, ...newRecipe });
      result(null, { id: res.insertId, ...newRecipe });
    });
  };


  
  
  Recipe.getAll = result => {
      sql.query("SELECT * FROM recipe", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
    
        console.log("recipe: ", res);
        result(null, res);
      });
    };
    
  
  module.exports = Recipe;