const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  }
});

// This name is important it must be the singular of whatever we define our database collection to be called
// Our collection is 'users' so under the hud mongoose is gonna look at this, pluralize it and it's gonna connect to that collection automatically for us whenever we use this to create new users
const User = mongoose.model('user', userSchema);

module.exports = User;