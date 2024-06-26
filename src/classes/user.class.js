const Crypto = require("crypto");

const Book = require("./book.class");

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
  // pickBook(ISBN) {
  //   const book = this.borrowedBooks.find((book) => book.ISBN === ISBN);
  // }
  pickBook(ISBN, library) {
    try {
      if (this.borrowedBooks.length >= 3) {
        throw new Error("You can only borrow 3 books at a time");
      }

      const foundBook = library.books.find((book) => book.ISBN === ISBN);

      if (!foundBook) {
        throw new Error(`Book with ${ISBN} does not belong to this library.`);
      }

      library.books = library.books.filter((book) => book.ISBN !== ISBN);
      foundBook.borrowed = true;
      this.borrowedBooks.push(foundBook);
      console.log(`${foundBook.title} was borrowed successfully`);
      return foundBook;
    } catch (err) {
      console.error("Error: ", err.message);
    }
  }

  /**
   * Return a book
   * @param {string} ISBN - ISBN of the  book to be returned
   */
  // returnBook(ISBN) {
  //   this.borrowedBooks = this.borrowedBooks.filter(
  //     (book) => book.ISBN !== ISBN
  //   );
  // }
  returnBook(ISBN, library) {
    try {
      const bookIndex = this.borrowedBooks.findIndex(
        (book) => book.ISBN === ISBN
      );
      if (bookIndex !== -1) {
        const [book] = this.borrowedBooks.splice(bookIndex, 1);
        book.borrowed = false;
        library.books.push(book);
        console.log(`${book.title} returned successfully`);
      } else {
        throw new Error(`user is not possesion book with ISBN: ${ISBN}`);
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  }
}

module.exports = User;
