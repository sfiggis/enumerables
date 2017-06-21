function Enumerable() {

  
  this.map = function(block) {
    var results = [];

    this.each(function(date) {
      results.push(block.call(date, date));
    });

    return results;
  }

  this.selects = function(block) {
    var results = [];

    this.each(function(date) {
     // console.log(date.getDate(date));
      if (block.call(date, date) === true) {
        results.push(date.getDate());
      }
    });
    return results;
  }

  this.find = function(block) {
    var results = [];

    this.each(function(date) {
      if (block.call(date, date) === true) {
        results.push(date.getDate());
        return;
      }
    })
    return results;
  }

  this.reverseEach = function(block) {
    for(var i = 0; i < this.length; i++) {
    var previousDay = new Date(
      this.startsAt.getFullYear(),
      this.startsAt.getMonth(),
      this.startsAt.getDate()
    )
    previousDay.setDate(this.startsAt.getDate() - i);
    console.log(previousDay);
    block.call(this, previousDay);
    }
  }

  this.reverse = function(block) {
    var results = [];

    this.reverseEach(function(date) {
      results.push(block.call(date, date));
    });

    return results;
  }

};

module.exports = Enumerable;