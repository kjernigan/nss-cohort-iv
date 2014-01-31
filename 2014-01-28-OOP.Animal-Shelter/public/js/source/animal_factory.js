/* global Animal: false */

(function(){

  'use strict';

  window.animalFactory = function(){
    var animals = [];
    var animal;
    var photos;
    
    photos = [];
    photos[0]= 'url(http://images4.wikia.nocookie.net/__cb20130423185312/poohadventures/images/e/e6/Doug.jpg)';
    photos[1]= 'url(http://everydayisa.files.wordpress.com/2012/04/up-doug-talking-dogcopy.jpeg)';
    animal = new Animal('Doug', 3, 'Male', photos, 'SQUIRREL!', 'brown', 'dog');
    animals.push(animal);

    photos = [];
    photos[0]= 'url(http://images.nationalgeographic.com/wpf/media-live/photos/000/641/overrides/2013-year-of-the-snake-list_64139_600x450.jpg)';
    animal = new Animal('Hissy', 2, 'Male', photos, 'He\'s so happy!', 'copper', 'snake');
    animals.push(animal);

    photos = [];
    photos[0]= 'url(http://1.bp.blogspot.com/_W90V87w3sr8/TNb5AkhePlI/AAAAAAAAAJc/4PythB2MNU4/s1600/NFSquir.jpg)';
    photos[1]= 'url(http://1.bp.blogspot.com/_W90V87w3sr8/TNb5Ao5_sUI/AAAAAAAAAJg/z75CIfnxCuI/s1600/gal-flying-squirrel.jpg)';
    animal = new Animal('Rocky', 1, 'Male', photos, 'Where\'s Bullwinkle?', 'brown', 'flying squirrel');
    animals.push(animal);

    photos = [];
    photos[0]= 'url(http://www.plateauwildlife.com/wp-content/uploads/2013/03/IRFA-stinger.jpg)';
    photos[1]= 'url(http://www.sbs.utexas.edu/fireant/Images/Solenopsis_invicta1.JPG)';
    animal = new Animal('Drone Suzy', 3, 'female', photos, 'Be careful.', 'red', 'fire ant');
    animals.push(animal);

    photos = [];
    photos[0]= 'url(http://i1.ytimg.com/vi/7I1QkHBCEa0/maxresdefault.jpg)';
    animal = new Animal('Derpette', 3, 'female', photos, 'EHRMAGHERD!', 'black and white', 'alpaca');
    animals.push(animal);




    return animals;
  };


})();
