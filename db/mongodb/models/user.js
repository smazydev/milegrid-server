let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  userID: String,
  avatar: String,
  rights: String,
});

let User = mongoose.model("User", userSchema);

module.exports = User;
