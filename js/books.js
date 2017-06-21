function Book(options) {
 this.title = options.title;
 this.author = options.author;
 this.description = options.description;
 this.publishedDate = options.publishedDate;
 this.imageUrl = options.imageUrl;

}


Book.prototype.fetch = function(data) {
  bookData = [];
  data.items.forEach(function(element) {
   // console.log(element.volumeInfo.title);
    var book = new Book({
      title: element.volumeInfo.title,
      author: element.volumeInfo.authors,
      description: element.volumeInfo.description,
      publishedDate: element.volumeInfo.publishedDate,
      imageUrl: element.volumeInfo.imageLinks.thumbnail
    });
    bookData.push(book);
  });
  return bookData;

}

module.exports = Book;