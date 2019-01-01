const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const orderSchema = new Schema({
  id: Number,
  description: String,
  price: Number
});

module.exports = mongoose.model("Order", orderSchema);
