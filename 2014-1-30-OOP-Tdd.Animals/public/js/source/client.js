/* jshint unused:false */

var Client = (function(){

  'use strict';

  function Client(name){
    this.name = name;
    this.animals = [];
  }

  Client.prototype.adopt = function(name, s1){
    var animals = _.remove(s1.placed, function(animal){
      return animal.name === name;
    });
    this.animals.push(animals[0]);
//    return animals[0];
  };






  return Client;
})();
