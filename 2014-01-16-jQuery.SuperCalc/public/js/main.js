$(document).ready(initialize);

function initialize(){
    $('.number').click(displayNumber);
    $('#sign').click(changeSign);
    $('#push').click(pushToQueue);
    $('.operator').click(compute);
    $('#clear').click(clear);
}

function clear(){
  $('#answer').text('');
  $('#queue').text('');
}

function compute(){
    var operator = this.id;
    var $lis = $('#queue li');
    var numbers = parseTags($lis);
    var result;
    switch(operator){
      case 'add':
         result = numbers[0] + numbers[1];
         break;
      case 'sub':
         result = numbers[1] - numbers[0];
         break;
      case 'mul':
         result = numbers[1] * numbers[0];
      break;
      case 'div':
         result = numbers[1] / numbers[0];
      break;
      case 'expon':
          result = 1;
          for(var i = 1; i <= numbers[0]; i++){
              result *= numbers[1];
             }
      break;
      case 'sum':
        var result = 0;
        for(var i = 0; i < numbers.length; i++){
          result += numbers[i];
        }

   }

    $('#answer').text(result);
    $('#queue').empty();
}

function pushToQueue(){
    var display = $('#answer').text();
    $('#answer').text('0');
    var $li = $('<li>');
    $li.text(display);
    $('#queue').prepend($li);
}

function displayNumber(){
  var display = $('#answer').text();
  var current = this.textContent;
  var output;

  if(current === '.' && containsChar(display, '.')) return;

  if(display === '0' && current !== '.')
      output = current;
  else
      output = display + current;

   $('#answer').text(output);
}

function changeSign(){
  var number = $('#answer').text();
  number *= -1;
  $('#answer').text(number);
}
