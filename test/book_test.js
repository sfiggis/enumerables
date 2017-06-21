const Data = require('../js/books_data')
var Book = require('../js/books');
var chai = require('chai');
var expect = chai.expect;
const Enumerable = require('../js/enumerable');
var sinon = require('sinon');



describe('A book', function() {

  beforeEach(function() {
    book = new Book({ 
      title: "Harry Potter and the Deathly Hallows",
      author: "J.K. Rowling",
      description: "\"'Give me Harry Potter,' said Voldemort's voice, 'and none shall be harmed. Give me Harry Potter, and I shall leave the school untouched. Give me Harry Potter, and you will be rewarded.'\" As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy... Pottermore has now launched the Wizarding World Book Club. Visit Pottermore to sign up and join weekly Twitter discussions at WW Book Club.",
      publishedDate: "2015-12-08",
      imageUrl: "http://books.google.com/books/content?id=gCtazG4ZXlQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    });
  });

  it("has all properties", function() {
    expect(book.title).to.equal("Harry Potter and the Deathly Hallows");
    expect(book.author).to.equal("J.K. Rowling");
    expect(book.description).to.equal("\"'Give me Harry Potter,' said Voldemort's voice, 'and none shall be harmed. Give me Harry Potter, and I shall leave the school untouched. Give me Harry Potter, and you will be rewarded.'\" As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy... Pottermore has now launched the Wizarding World Book Club. Visit Pottermore to sign up and join weekly Twitter discussions at WW Book Club.");
    expect(book.publishedDate).to.equal("2015-12-08");
    expect(book.imageUrl).to.equal("http://books.google.com/books/content?id=gCtazG4ZXlQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api");
  });

  // describe('fetch', function() {
  //   it("returns an array of books from the api", function() {
  //     expect(book.fetch(data)).to.deep.eq([new Book({ title: "Harry Potter and the Deathly Hallows"})]);
  //   })
    // var booksData;
    // beforeEach(function() {
    //   booksData = Json.parse(Data);
    // });
  //});
});