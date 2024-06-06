const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },

  id: {
    type: String,
    required: true,
    unique: true,
  },

  borrowedBooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
