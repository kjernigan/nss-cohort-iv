$(document).ready(initialize);

function initialize(){
  // $ means jQuery
  //$('css or jQuery selector')
  $('h1').css('color', 'red');
  $('h1').css('font-size', '15px');
  var currentH1Text = $('h1').text();
  console.log(currentH1Text);
  $('h1').text('Welcome to Javascript');

  $('div').css('color', '#990099');
  $('#d2').css('font-size', '9px');
  $('#d3').css('background-color', 'yellow');
  $('.c1').css({'color':'green', 'background-color':'red'}).text('Kenneth');
 
  var bgcolor = prompt('What background color do you want?');
  $('#d3').css('background-color', bgcolor);


  var usertext = prompt("What do you want to change Div 3's text to?");
  $('#d3').text(usertext);

  var numPs =  $('.cp').length;
  console.log(numPs);


}






