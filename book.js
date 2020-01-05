class Book {
  constructor(firstName, lastName, bookTitle, publicationYear) {
    this.author = `${firstName} ${lastName}`;
    this.title = bookTitle;
    this.publicationYear = publicationYear;
  }
}

module.exports = Book;
