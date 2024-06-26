class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }
  /**
   * Register a new user
   * @param {User}
   */
  registerMembers(user) {
    this.members.push(user);
  }

  /**
   * Add new book
   * @param {Book}
   */
  // addNewBook(book) {
  //   this.books.push(book);
  // }
  addNewBook(newBook) {
    try {
      if (this.books.some((book) => book.title === newBook.title)) {
        throw new Error(`${book.title} exists already in library.`);
      }
      this.books.push(newBook);
      console.log(`${newBook.title} Added Successfully`);
    } catch (err) {
      console.log("Error", err.message);
    }
  }

  /**
   * Borrow a book
   * @param {User} user - name of user borrowing the book.
   * @param {string} ISBN - ISBN of the borrowed book.
   * @param {boolean} - True if the book was borrowed , False if it wasn't.
   */
  borrowBook(user, ISBN) {
    const book = this.books.find((book) => book.ISBN === ISBN);

    if (!user?.borrowedBooks.includes(book) && book) {
      book.borrowed = true;
      user.borrowedBooks.push(book);
      return true;
    }

    return false;
  }
}

module.exports = Library;
