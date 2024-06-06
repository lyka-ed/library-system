const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],

  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;
