/* global Animal: false, animalFactory: false */
(function(){

  'use strict';

  $(document).ready(initialize);

  var animals = [];

  function initialize(){
    debugger;
    $('#add-photo').click(addPhoto);
    $('#add-animal').click(addAnimal);
    animals = animalFactory();
    makeTable();
  }

  function addPhoto(event){
    var url = 'url(' + $('#photo').val() + ')';
    var $div = $('<div>');

    $div.addClass('th');
    $div.css('background-image', url);
    $('#photos').prepend($div);
    event.preventDefault();
  }

  function addAnimal(event){
    var species = $('#species').val();
    var age = $('#age').val() * 1;
    var gender = $('#gender').val();
    var color = $('#color').val();
    var name = $('#name').val();
    var description = $('#description').val();
    var photos = getAnimalPhotos();


    var animal = new Animal(name, age, gender, photos, description, color, species);
    animals = [];
    animals.push(animal);
    makeTable();
    event.preventDefault();
  }

  function getAnimalPhotos(){
    var $pics = $('#photos>div');

    _.map($pics, function(x){
      return $(x).css('background-image');
    });
  }

  function makeTable(){
    for(var i = 0; i < animals.length; i++){
      var $tr = $('<tr>');
      $('#tablebody').append($tr);
      var $td = $('<td>');
      var $a1 = $('<a>');
      $a1.attr('href','#');
      $a1.attr('data-search','name');
      $a1.attr('data-value',animals[i].name);
      $a1.text(animals[i].name);

      var $td1 = $('<td>');
      var $a2 = $('<a>');
      $a2.attr('href','#');
      $a2.attr('data-search','species');
      $a2.attr('data-value',animals[i].species);
      $a2.text(animals[i].species);

      var $td2 = $('<td>');
      var $a3 = $('<a>');
      $a3.attr('href','#');
      $a3.attr('data-search','gender');
      $a3.attr('data-value',animals[i].gender);
      $a3.text(animals[i].gender);

      var $td3 = $('<td>');
      var $a4 = $('<a>');
      $a4.attr('href','#');
      $a4.attr('data-search','age');
      $a4.attr('data-value',animals[i].age);
      $a4.text(animals[i].age);

      var $td4 = $('<td>');
      var $a5 = $('<a>');
      $a5.attr('href','#');
      $a5.attr('data-search','color');
      $a5.attr('data-value',animals[i].color);
      $a5.text(animals[i].color);

      var $td5 = $('<td>');
      var $a6 = $('<a>');
      $a6.attr('href','#');
      $a6.attr('data-search','description');
      $a6.attr('data-value',animals[i].description);
      $a6.text(animals[i].description);

      var $td6 = $('<td>');
      $tr.append($td6);
      for(var j=0; j < animals[i].photos.length; j++){
        var $div = $('<div>');
        $div.css('background-image', animals[i].photos[j]);
        $div.addClass('small');
        $td6.append($div);
      }
      $tr.prepend($td, $td1, $td2, $td3, $td4, $td5);
      $td.prepend($a1);
      $td1.prepend($a2);
      $td2.prepend($a3);
      $td3.prepend($a4);
      $td4.prepend($a5);
      $td5.prepend($a6);

    }
  }
})();


