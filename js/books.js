function Book(options) {
 this.title = options.title;
 this.author = options.author;
 this.description = options.description;
 this.publishedDate = options.publishedDate;
 this.imageUrl = options.imageUrl;

}

Book.prototype.each = function(block) {
  for(var i = 0; i < 10; i++) {
    var nextDay = new Date(
      this.startsAt.getFullYear(),
      this.startsAt.getMonth(),
      this.startsAt.getDate()
    )
    nextDay.setDate(this.startsAt.getDate() + i);

    block.call(this, nextDay);
  }
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