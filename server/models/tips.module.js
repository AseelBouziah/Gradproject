const sql = require("./db.js");

// constructor
const tips = function(tips) {
  this.list_title = tips.list_title;
  this.list_img = tips.list_img;
  this.list_Idiv = tips.list_Idiv;
 
};

tips.getAll = result => {
    sql.query("SELECT * FROM tips", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("tips: ", res);
      result(null, res);
    });
  };
  module.exports = tips;