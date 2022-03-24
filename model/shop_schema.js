const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String
  },
  model:{
      type:String,
      required:true
  },
  date:{
    type:String,
    required:true
  },
  phoneNumber:{
    type:String,
    required:true
  }
});

const User = mongoose.model("shop_model", UserSchema);

module.exports = User;
