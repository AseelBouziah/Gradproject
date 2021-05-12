const sql = require("./db.js");

// constructor
const Customer = function(user) {
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.password = user.password;
  this.conPassword = user.conPassword;
  this.email = user.email;
  this.allergy = user.allergy;
  this.illness = user.illness;

};

Customer.create = (newCustomer, result) => {
  sql.query("INSERT INTO user SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Customer.login = (password,email,result) => {
  sql.query(`SELECT * FROM user WHERE email = ${email} AND password = ${password}` , (err, res)  => {
  if (err) {
  console.log("error: ", err);
        result(err, null);
        return;
  }
  if (res.length > 0) {
  result(null, { id: res[0] }) 
  } else {
  result(null, { res }) 
  }
  });
  
  };


Customer.findById = (customerId, result) => {
  sql.query(`SELECT * FROM user WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Customer.getAll = result => {
  sql.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

Customer.remove = (id, result) => {
  sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};

Customer.removeAll = result => {
  sql.query("DELETE FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Customer;