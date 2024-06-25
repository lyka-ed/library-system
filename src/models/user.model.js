const Crypto = require("crypto");

const Book = require("../models/book.model");

class User {
  /**
   * Create User
   * @param {string} name - user name in string
   */
  constructor(name) {
    this.id = Crypto.randomUUID();
    this.name = name;
    this.borrowedBooks = [];
  }

  /**
   * Pick a book
   * @param {ISBN}
   * @return {Book}
   */
  peakBook(ISBN) {
    const book = this.borrowedBooks.find((book) => book.ISBN === ISBN);
  }

  /**
   * Return a book
   * @param {string} ISBN - isbn of the  book to be returned
   */
  returnBook(ISBN) {
    this.borrowedBooks = this.borrowedBooks.filter(
      (book) => book.ISBN !== ISBN
    );
  }
}

module.exports = User;
