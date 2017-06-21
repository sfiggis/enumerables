function Book(options) {
 this.title = options.title;
 this.author = options.author;
 this.description = options.description;
 this.publishedDate = options.publishedDate;
 this.imageUrl = options.imageUrl;

}

Book.prototype.fetch = function() {

}

module.exports = Book;