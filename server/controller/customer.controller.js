const Customer = require("../models/customer.module.js");

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const customer = new Customer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      conPassword: req.body.conPassword,
      email : req.body.email,
      allergy : req.body.allergy,
      illness : req.body.illness

    });
  
    // Save Customer in the database
    Customer.create(customer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };


  // customer login 
exports.login = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  
    var password = req.body.password;
    var email = req.body.email;
 

Customer.login(email,password, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while login the Customer."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };
// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};