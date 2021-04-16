exports.Book = class Book {
  constructor(bookeId, title, isbn, description, publisher, author, pages) {
    this.bookeId = bookeId;
    this.title = title;
    this.isbn = isbn;
    this.description = description;
    this.publisher = publisher;
    this.author = author;
    this.pages = pages;
  }
};
