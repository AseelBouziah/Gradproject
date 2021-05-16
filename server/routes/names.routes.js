module.exports = app => {
    const names = require("../controller/names.controller.js");
    const customers = require("../controller/customer.controller.js");
    const imgtitle = require("../controller/imgtitle.controller.js");
    const taabkh = require("../controller/finalfinal.controller.js");
    const recipe = require ("../controller/recipe.controller.js");
    const tips = require ("../controller/tips.controller.js");
  
    app.get(/search\/(?:([^\/]+?))\/?$/i, function (req, res) {
      var search = req.params[0]
      var sql = "SELECT * from college_of_engh1 WHERE HNumber LIKE '%"+search+"%'"
      conn.query(sql, function (err, result) {
        if (err) res.send(err)
        res.send(result)
      })
    })

    // اعادة نصائح صحية
   app.get("/tips", tips.findAll);
   //إضافة وصفة

   app.post("/recipe", recipe.create);


   // إعادة وصفاتك 
   app.get("/recipe", recipe.findAll);


    //log in 
    app.post("/login", customers.login); 

    // Retrieve all Customers
   app.get("/names", names.findAll);
   

 app.post("/customers", customers.create);

  // Retrieve all Customers
  app.get("/customers", customers.findAll);

  // Retrieve all recipes
  app.get("/finalfinal", taabkh.findAll);

  // Retrieve all imgtitle
  app.get("/imgtitle", imgtitle.findAll);

  // Retrieve a single Customer with customerId
  app.get("/customers/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/customers/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/customers", customers.deleteAll);
    
  };

 