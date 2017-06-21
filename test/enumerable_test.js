var chai = require('chai');
var expect = chai.expect;
const Week = require('../js/week');
const Enumerable = require('../js/enumerable');
var sinon = require('sinon');

describe('enumerable objects', function() {
  var week;

  beforeEach(function() {
    week = new Week({ startsAt: new Date(2017, 5, 21) });
  });

  it('knows the start date as a string', function() {
    expect(week.toString()).to.eq('June 21, 2017');
  });

  describe('each', function() {
    var body;
    beforeEach(function() {
      body = sinon.spy();
      week.each(body);
    });
    it("invokes the body for each item in the week", function() {
      expect(body.calledWith(new Date(2017, 5, 21))).to.eq(true);
      expect(body.calledWith(new Date(2017, 5, 22))).to.eq(true);
      expect(body.calledWith(new Date(2017, 5, 23))).to.eq(true);
      expect(body.calledWith(new Date(2017, 5, 24))).to.eq(true);
      expect(body.calledWith(new Date(2017, 5, 25))).to.eq(true);
      expect(body.calledWith(new Date(2017, 5, 26))).to.eq(true);
      expect(body.calledWith(new Date(2017, 5, 27))).to.eq(true);
    });
  });

  describe('map', function() {
    var results;

    beforeEach(function() {
      Enumerable.call(Week.prototype)

      results = week.map(function(date) { return date.getDate() });
    });

    it("builds an array with the return values of the given function", function() {
      expect(results).to.deep.eq([21, 22, 23, 24, 25, 26, 27]);
    });
  });

  describe('selects', function() {
    var results;

    beforeEach(function() {
      Enumerable.call(Week.prototype)

      results = week.selects(function(date) { return date.getDate() > 23});
    });

    it("builds an array containing all elements where function returns true", function() {
      expect(results).to.deep.eq([24, 25, 26, 27]);
    });
  });

  describe('find', function() {
    var results;

    beforeEach(function() {
      Enumerable.call(Week.prototype)

      results = week.find(function(date) { return date.getDate() === 23});
    });

    it("selects the first item in the array where the function returns true", function() {
      expect(results).to.deep.eq([23]);
    });
  });

  describe('reverse each', function() {
    var body;

    beforeEach(function() {
      body = sinon.spy();
      week.reverseEach(body);
    });
    it("invokes the body for each item in the week", function() {
      expect(body.calledWith(new Date(2017, 5, 21))).to.eq(true);
      expect(body.calledWith(new Date(2017, 5, 20))).to.eq(true);
      expect(body.calledWith(new Date(2017, 5, 19))).to.eq(true);
      expect(body.calledWith(new Date(2017, 5, 18))).to.eq(true);
      expect(body.calledWith(new Date(2017, 5, 17))).to.eq(true);
      expect(body.calledWith(new Date(2017, 5, 16))).to.eq(true);
      expect(body.calledWith(new Date(2017, 5, 15))).to.eq(true);
    });
  });

  describe('reverse', function() {
    var results;

    beforeEach(function() {
      Enumerable.call(Week.prototype)

      results = week.reverse(function(date) { return date.getDate() });
    });

    it("builds an array with the return values of the given function", function() {
      expect(results).to.deep.eq([21, 20, 19, 18, 17, 16, 15]);
    });
  });
});