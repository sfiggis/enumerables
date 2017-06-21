function Week(options) {
  this.startsAt = options.startsAt;
};

Week.prototype.toString = function() {
  return this.startsAt.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

Week.prototype.each = function(block) {
  for(var i = 0; i < 7; i++) {
    var nextDay = new Date(
      this.startsAt.getFullYear(),
      this.startsAt.getMonth(),
      this.startsAt.getDate()
    )
    nextDay.setDate(this.startsAt.getDate() + i);

    block.call(this, nextDay);
  }
}

Week.prototype.length = 7;

module.exports = Week;