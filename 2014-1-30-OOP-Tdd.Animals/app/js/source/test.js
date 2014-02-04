/* global test:false, deepEqual:false, ok:false, Shelter:false, Animal:false, Client:false */

'use strict';

test( 'Shelter', function() {
  var shelter = new Shelter();
  var s1 = new Shelter();
  var string = 'my string';

  ok(shelter instanceof Shelter, 'shelter should be an instance of Shelter');
  ok(s1 instanceof Shelter, 's1 should be an instance of Shelter');
  ok(!(string instanceof Shelter), 'string should not be an instance of Shelter');
});


test( 'Shelter#name', function() {
  var s1 = new Shelter('Green Hills Shelter');

  deepEqual(s1.name,'Green Hills Shelter', 's1 should have a name');
});

test( 'Shelter#location', function() {
  var s1 = new Shelter('Green Hills Shelter');
  s1.location = 'Main St';
  var s2 = new Shelter('GHS');

  deepEqual(s1.location,'Main St', 's1 should have a location');
  deepEqual(s2.location,'Not Defined', 's2 should have a default location');
});

test( 'Shelter#capacity', function() {
  var s1 = new Shelter('Green Hills Shelter');

  deepEqual(s1.capacity, 0, 's1 should have a zero capacity');
});

test( 'Shelter#setHours()', function() {
  var s1 = new Shelter('Green Hills Shelter');
  s1.setHours([
    {day:'Mon', open:'8am', close:'5pm'},
    {day:'Wed', open:'11am', close:'2pm'},
    {day:'Fri', open:'9am', close:'4pm'}
  ]);

  s1.hours = 'blah';
  deepEqual(s1.getHours(), 'Mon 8am-5pm, Wed 11am-2pm, Fri 9am-4pm', 's1 should have set hours');
});

test('Shelter#addAnimal', function(){
  var s1 = new Shelter('GHS');
  var a1 = new Animal('fido');
  s1.addAnimal(a1);

  ok(s1.animalCount() === 1, 's1 should have 1 item in array');
});

test('Shelter#placeAnimal', function(){
  var s1 = new Shelter('Top Gear');
  var a1 = new Animal('fido');
  var a2 = new Animal('the stig');
  var a3 = new Animal('jeremy clarkson');
  s1.addAnimal(a1);
  s1.addAnimal(a2);
  s1.addAnimal(a3);

  s1.placeAnimal('fido');
  deepEqual(s1.placed[0].name, 'fido', 'a1 name should be fido');
  deepEqual(s1.animalCount(), 2, 's1.animals.length should equal 2');
  deepEqual(s1.placed.length, 1, 's1.placed.length should equal 1');

});

test( 'Animal', function() {
  var a1 = new Animal();

  ok(a1 instanceof Animal, 'a1 should be an instance of Animal');
});

test( 'Animal#name', function(){
  var a1 = new Animal('fido');

  deepEqual(a1.name,'fido', 'a1 should have a name');
});

test( 'Animal#species', function(){
  var a1 = new Animal('fido', 'dog');
  var a2 = new Animal('fido');
  deepEqual(a1.species,'dog', 'a1 should have a species');
  deepEqual(a2.species,'Not Set', 'a2 should not have a species');
});

test( 'Animal#gender', function(){
  var a1 = new Animal('fido', 'dog', 'male');
  var a2 = new Animal('fido');
  deepEqual(a1.gender,'male', 'a1 should have a gender');
  deepEqual(a2.gender,'Not Set', 'a2 should not have a gender');
});

test( 'Animal#age', function(){
  var a1 = new Animal('fido', 'dog', 'male', 8);
  var a2 = new Animal('fido');
  deepEqual(a1.age, 8, 'a1 should have an age');
  deepEqual(a2.age, 0, 'a2 should not have an age');
});



test( 'Client', function() {
  var c1 = new Client();

  ok(c1 instanceof Client, 'c1 should be an instance of Client');
});

test( 'Client#name', function() {
  var c1 = new Client('James May');

  deepEqual(c1.name,'James May', 'c1 should have a name');
});

test( 'Client#animals', function(){
  var c1 = new Client('James May');

  ok(c1.animals.length === 0, 'c1 should have 0 items in array');
});

test('Client#adopt', function(){
  var s1 = new Shelter('Top Gear');
  var a1 = new Animal('fido');
  var a2 = new Animal('the stig');
  var a3 = new Animal('jeremy clarkson');
  var a4 = new Animal('richard Hammond');
  var c1 = new Client('James May');
  s1.addAnimal(a1);
  s1.addAnimal(a2);
  s1.addAnimal(a3);
  s1.addAnimal(a4);
  s1.placeAnimal('fido');
  c1.adopt('fido',s1);

  deepEqual(c1.animals[0].name, 'fido', 'animal 0 name should be fido');
  deepEqual(s1.animals.length, 3, 's1.animals.length should equal 3');
  deepEqual(s1.placed.length, 0, 's1.placed.length should equal 0');
  deepEqual(c1.animals.length, 1, 'c1.animals.length should equal 1');

});




