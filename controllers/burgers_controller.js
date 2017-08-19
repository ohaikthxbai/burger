// requiring the packages
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// CRUD
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        //testing
        //console.log(data)
    var hbsObject = { 
         burgers: data 
        };
    res.render('../views/index.handlebars', hbsObject);
    });  
});

router.post("/", function(req, res) {
    burger.newBurger([
      "burger_name"
    ], [
      req.body.burger_name
    ], function() {
      res.redirect("/");
    });
  });

  router.put("/:id", function(req, res) {
    burger.burgerEaten({
      devoured: 0
    }, req.params.id, function() {
      res.redirect("/");
    });
  });

module.exports = router;