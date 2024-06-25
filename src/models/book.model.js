const Crypto = require("crypto");

class Book {
  /**
   * Book Details
   * @param {string} title
   * @param {string} author
   * @param {string} ISBN
   */

  constructor(title, author, ISBN) {
    this.id = Crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.borrowed = false;
  }

  /**
   * Check if a book was borrowed
   * @returns {boolean} - If borrowed True , if not False
   * */

  isBorrowed() {
    return this.isBorrowed;
  }
}

module.exports = Book;
