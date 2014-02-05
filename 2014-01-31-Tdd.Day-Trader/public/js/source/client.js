/* jshint unused:false */

var Client = (function(){
  
  'use strict';

  function Client(name){
    this.name = name;
    this._portfolios = [];
  }

  Object.defineProperty(Client.prototype, 'portfolioCount', {
    get: function(){return this._portfolios.length;}
  });

  Client.prototype.addPortfolio = function(input){
    this._portfolios = this._portfolios.concat(input);
  };

  Client.prototype.getPortfolio = function(input){
    var output;
    if(typeof input === 'string'){
      output = findPortfolio(input, this._portfolios);
    } else {
      output = _.map(input, function(name){
        return findPortfolio(name, this._portfolios);
      }, this);
    }
    return output;
  };

  function findPortfolio(name, portfolios){
    return  _.find(portfolios, function(portfolio){
      return name === portfolio.name;
    });
  }

  Client.prototype.delPortfolio = function(input){
    var portfolios = [].concat(input);
    var output = _.remove(this._portfolios, function(portfolio){
        return _.contains(portfolios, portfolio.name);
      });

    if(typeof input === 'string'){
      output = output[0];
    }
    return output;
  };

  return Client;

})();
