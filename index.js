const Book = require("./src/models/book.model");
const Library = require("./src/models/library.model");
const User = require("./src/models/user.model");

const lib = new Library();

const lex = new User("Lex Berry");
const dora = new User("Dora Fed");

lib.addNewBook(
  new Book("Bridges are for Burning", "Bina Idonije", "9789789907229")
);

lib.addNewBook(new Book("Twisted Love", "Ana Huang", "978212262088"));

lib.addNewBook(
  new Book("The Art of Seduction", "Robert Greene", "9786075277851")
);

lib.addNewBook(
  new Book("I Wish I Knew This Earlier", "Toni Tones", "9780008458249")
);

lib.registerMembers(lex);
console.log(lib.members);

lib.borrowBook(lex, "978212262088");
lib.borrowBook(dora, "9780008458249");

console.log(lib.books);
