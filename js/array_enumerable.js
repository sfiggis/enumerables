function ArrayEnumerable() {

  
  this.map = function(block) {
    var results = [];

    this.forEach(function(element) {
      results.push(block.call(element, element));
    });

    return results;
  }

  this.selects = function(block) {
    var results = [];

    this.forEach(function(element) {
      if (block.call(element, element) === true) {
        results.push(element);
      }
    });
    return results;
  }

  this.find = function(block) {
    var results = [];

    this.forEach(function(element) {
      if (block.call(element, element) === true) {
        results.push(element);
        return;
      }
    })
    return results;
  }

};

module.exports = ArrayEnumerable;