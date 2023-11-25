const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
  userName: {
    type: String,
    required: [true, "Username is an required field"]
  },

  email: {
    type: String,
    required: [true, "An email is required"],
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  },

  imgAvatar: {
    type: String,
    required: false
  },

  role: {
    type: String,
    required: [true, "this field is required"],
    enum: ["client", "admin"],
    default: "client"
  },

  disabled: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

module.exports = model('userModel', userSchema);