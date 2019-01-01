var express = require("express");
var router = express.Router();
var Order = require("../../models/Order");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/addOrder", () => {
  var myOrder = new Order();
  myOrder.id = 1;
  myOrder.description = "test order";
  myOrder.price = 20;

  myOrder.save(err => {
    if (err) console.log(err);
    else console.log("saved succesfully");
  });
});

module.exports = router;
