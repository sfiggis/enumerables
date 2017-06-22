const Data = require('../js/books_data')
Image = require('../js/image');
var Book = require('../js/books');
var chai = require('chai');
var expect = chai.expect;
const ArrayEnumerable = require('../js/array_enumerable');
var sinon = require('sinon');
var chaiDom = require('chai-dom');
chai.use(chaiDom);
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM();
document = dom.window.document;
window = dom.window;



describe('A book', function() {
 var book;
  beforeEach(function() {
    book = new Book({ 
      title: "Harry Potter and the Deathly Hallows",
      author: ["J.K. Rowling"],
      description: "\"'Give me Harry Potter,' said Voldemort's voice, 'and none shall be harmed. Give me Harry Potter, and I shall leave the school untouched. Give me Harry Potter, and you will be rewarded.'\" As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy... Pottermore has now launched the Wizarding World Book Club. Visit Pottermore to sign up and join weekly Twitter discussions at WW Book Club.",
      publishedDate: "2015-12-08",
      imageUrl: "http://books.google.com/books/content?id=gCtazG4ZXlQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    });
    ArrayEnumerable.call(Array.prototype);
  });

  it("has all properties", function() {
    expect(book.title).to.equal("Harry Potter and the Deathly Hallows");
    expect(book.author[0]).to.equal("J.K. Rowling");
    expect(book.description).to.equal("\"'Give me Harry Potter,' said Voldemort's voice, 'and none shall be harmed. Give me Harry Potter, and I shall leave the school untouched. Give me Harry Potter, and you will be rewarded.'\" As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy... Pottermore has now launched the Wizarding World Book Club. Visit Pottermore to sign up and join weekly Twitter discussions at WW Book Club.");
    expect(book.publishedDate).to.equal("2015-12-08");
    expect(book.imageUrl).to.equal("http://books.google.com/books/content?id=gCtazG4ZXlQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api");
  });

  describe('fetch', function() {
     it("returns the book properties as an object from the api", function() {
       expect(book.fetch(Data).length).to.deep.eq(10);
    });
  });

  describe('selects', function() {
    var results;

    beforeEach(function() {
      ArrayEnumerable.call(Array.prototype);
      var books = book.fetch(Data);
      results = books.selects(function(book) { return book.title === "Harry Potter and the Deathly Hallows"});
    });

    it("builds an array containing all elements where function returns true", function() {
      expect(results).to.deep.eq([book]);
    });
  });

  describe('find', function() {
    var results;

    beforeEach(function() {
      ArrayEnumerable.call(Array.prototype)
      var books = book.fetch(Data);

      results = books.find(function(book) { return book.imageUrl === "http://books.google.com/books/content?id=gCtazG4ZXlQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"});
    });

    it("selects the first item in the array where the function returns true", function() {
      expect(results).to.deep.eq([book]);
    });
  });

  describe('render', function() {
    var rendered;

    beforeEach(function() {
      rendered = book.render();
    });

    it("displays a book as a DOM element", function() {
      expect(rendered.nodeName).to.eq("DIV");
    });
    it("displays a title as a h1", function() {
      expect(rendered.children[0].nodeName).to.eq("H1");
      expect(rendered.children[0].innerHTML).to.eq("Harry Potter and the Deathly Hallows");
    });
    it("displays an image", function() {
      expect(rendered.children[1].nodeName).to.eq("IMG");
      expect(rendered.children[1].getAttribute("src")).to.eq("http://books.google.com/books/content?id=gCtazG4ZXlQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api");
    });
  });
});