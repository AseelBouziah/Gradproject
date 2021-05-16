const tips = require("../models/tips.module.js");



// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  
};



exports.findAll = (req, res) => {
  tips.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving finalfinal."
        });
      else res.send(data);
    });
  };