const Book = require("./src/classes/book.class");
const Library = require("./src/classes/library.class");
const User = require("./src/classes/user.class");

const lib = new Library();
const lex = new User("Lex Berry");
const dora = new User("Dora Fed");

lib.borrowBook(lex, "978212262088");

lib.addNewBook(
  new Book("I Wish I Knew This Earlier", "Toni Tones", "9780008458249")
);

lib.addNewBook(
  new Book("The Art of Seduction", "The Art of Seduction", "9786075277851")
);

lib.addNewBook(new Book("Twisted Love", "Ana Huang", "978212262088"));

lib.addNewBook(
  new Book("Bridges are for Burning", "Bina Idonije", "9789789907229")
);

lib.registerMembers(lex);
lib.registerMembers(dora);
// console.log(lib.members);

console.log(lib.books);

lib.borrowBook(lex, "978212262088");
lib.borrowBook(lex, "9789789907229");

console.log(lib.members);

console.log(lib.books);
