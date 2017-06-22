function Image(options) {
  for(var property in options) {
    this[property] = options[property];
  }
};

Image.prototype.render = function() {
  var image = document.createElement('img');
  image.setAttribute("src", this.src);
  image.setAttribute("width", this.width);
  image.setAttribute("height", this.height);
  image.setAttribute("alt", this.title);
  image.setAttribute("title", this.title);

  return image;
};

module.exports = Image;