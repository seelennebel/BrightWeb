const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const valid = (input) => {
  if(input.trim().length === 0) {
    return false;
  }
  return true;
};

const User_Schema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "enter your username"],
    unique: true,
    validate: [valid, "username in not valid"]
  },
  user_password: {
    type: String,
    required: [true, "enter your password"],
    validate: [valid, "password is not valid"] 
  },
  orders: {
    type: [Object],
    required: false
  }
});



User_Schema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt();
  this.user_password = await bcrypt.hash(this.user_password, salt);
  next();
});

User_Schema.statics.login = async function(user_name, userpassword) {
  const user = await this.findOne(({ user_name }));
  if(user) {
    const auth = await bcrypt.compare(userpassword, user.user_password);
    if(auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect username");
};

const User = mongoose.model('users', User_Schema);

module.exports = User; 