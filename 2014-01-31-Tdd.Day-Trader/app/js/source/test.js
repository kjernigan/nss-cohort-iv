/* global test:false, ok:false, Stock:false, deepEqual:false, throws:false, asyncTest:false, start:false, Portfolio:false, Client:false */

'use strict';

test( 'Stock#new', function() {
  var s1 = new Stock('AAPL', 50, 25);

  throws(function(){
    s1.symbol = 'abc';
  }, 'should not be able to set symbol on s1');

  throws(function(){
    s1.shares = 100;
  }, 'should not be able to set shares on s1');

  throws(function(){
    s1.purchaseAmount = 1000;
  }, 'should not be able to set purchaseAmount on s1');


  ok(s1 instanceof Stock, 's1 should be an instance of Stock');
  deepEqual(s1.symbol, 'AAPL', 's1 should be AAPL');
  deepEqual(s1.shares, 50, 'shares should be 50');
  deepEqual(s1.purchaseAmount, 25, 'purchaseAmount should be 25');
});


asyncTest('Stock#value', function() {
  var s1 = new Stock('AAPL', 50, 25);
  s1.getQuote(function(val){
    ok(val > 0, 'appl total value should be above zero');
    start();
  });
});

test( 'Portfolio#new', function() {
  var p1 = new Portfolio('Tech Stocks');

  ok(p1 instanceof Portfolio, 'p1 should be an instance of Portfolio');
  deepEqual(p1.name, 'Tech Stocks', 'p1 should have a name');
  deepEqual(p1.stockCount, 0, 'p1 should have no stocks');
});

test('Portfolio#addStock', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 30, 50);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 250, 35);

  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);

  deepEqual(p1.stockCount, 4, 'p1 should have four stocks');
});

test('Portfolio#getStock', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 30, 50);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);
  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);

  var s5 = p1.getStock('AAPL');
  var stocks = p1.getStock(['AMZN', 'GOOG']);

  deepEqual(s5.symbol, 'AAPL', 's4 should find AAPL');
  deepEqual(stocks.length, 2, 'stocks should have 2 stocks in array');
  deepEqual(stocks[0]._symbol, 'AMZN', 'should get amzn');
  deepEqual(stocks[1]._symbol, 'GOOG', 'should get goog');
});

test('Portfolio#delStock', function(){
  var p1 = new Portfolio('Tech Stocks');
  var s1 = new Stock('AAPL', 30, 50);
  var s2 = new Stock('AMZN', 150, 20);
  var s3 = new Stock('GOOG', 250, 30);
  var s4 = new Stock('MSFT', 350, 35);
  p1.addStock(s1);
  p1.addStock(s2);
  p1.addStock([s3, s4]);

  var s5 = p1.delStock('AAPL');
  var stocks = p1.delStock(['AMZN', 'GOOG']);

  deepEqual(s5.symbol, 'AAPL', 's5 should find AAPL');
  deepEqual(stocks.length, 2, 'stocks should have 2 stocks removed');
  deepEqual(stocks[0]._symbol, 'AMZN', 'should get amzn');
  deepEqual(stocks[1]._symbol, 'GOOG', 'should get goog');
  deepEqual(p1.stockCount, 1, 'p1 should have 1 stock left in array');
});


// CLIENT SHIT



test( 'Client#new', function() {
  var c1 = new Client('bob');

  ok(c1 instanceof Client, 'c1 should be an instance of Client');
  deepEqual(c1.name, 'bob', 'c1 should have a name');
  deepEqual(c1.portfolioCount, 0, 'c1 should have no portfolios');
});

test('Client#addPortfolio', function(){
  var c1 = new Client('bob');
  var p1 = new Portfolio('Tech Stocks');
  var p2 = new Portfolio('Short Term');
  var p3 = new Portfolio('Long Term');
  var p4 = new Portfolio('Risky');

  c1.addPortfolio(p1);
  c1.addPortfolio(p2);
  c1.addPortfolio([p3, p4]);

  deepEqual(c1.portfolioCount, 4, 'c1 should have four portfolios');
});

test('Client#getPortfolio', function(){
  var c1 = new Client('bob');
  var p1 = new Portfolio('Tech Stocks');
  var p2 = new Portfolio('Short Term');
  var p3 = new Portfolio('Long Term');
  var p4 = new Portfolio('Risky');
  c1.addPortfolio(p1);
  c1.addPortfolio(p2);
  c1.addPortfolio([p3, p4]);

  var p5 = c1.getPortfolio('Tech Stocks');
  var portfolios = c1.getPortfolio(['Short Term', 'Long Term']);

  deepEqual(p5.name, 'Tech Stocks', 'p5 should find Tech Stocks');
  deepEqual(portfolios.length, 2, 'portfolios should have 2 portfolios in array');
  deepEqual(portfolios[0].name, 'Short Term', 'should get Short Term');
  deepEqual(portfolios[1].name, 'Long Term', 'should get Long Term');
});

test('Client#delPortfolio', function(){
  var c1 = new Client('bob');
  var p1 = new Portfolio('Tech Stocks');
  var p2 = new Portfolio('Short Term');
  var p3 = new Portfolio('Long Term');
  var p4 = new Portfolio('Risky');
  c1.addPortfolio(p1);
  c1.addPortfolio(p2);
  c1.addPortfolio([p3, p4]);

  var p5 = c1.delPortfolio('Tech Stocks');
  var portfolios = c1.delPortfolio(['Short Term', 'Long Term']);

  deepEqual(p5.name, 'Tech Stocks', 's5 should find Tech Stocks');
  deepEqual(portfolios.length, 2, 'portfolios should have 2 portfolios removed');
  deepEqual(portfolios[0].name, 'Short Term', 'should get Short Term');
  deepEqual(portfolios[1].name, 'Long Term', 'should get Long Term');
  deepEqual(c1.portfolioCount, 1, 'c1 should have 1 portfolio left in array');
});











