const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
    user_id: String,
    results: Object,
  });
  
  
  module.exports = mongoose.model("results", ResultSchema);