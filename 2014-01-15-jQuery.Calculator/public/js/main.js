$(document).ready(initialize);

function initialize(){
  $('#doMath').click(doMath);
  $('#clear').click(clear);
  $('#sum').click(sum);
  $('#product').click(product);

}

function doMath(){
//  debugger;
  var num1 = $('#num1').val();
  num1 = parseFloat(num1);
  var num2 = $('#num2').val();
  num2 = parseFloat(num2);
  var op = $('#op').val();

  var result = compute(num1, num2, op);
    $('#result').text(result);
}

  function compute(x, y, op){
    var result;
   switch(op){
     case '+': result = x + y; break;
     case '-': result = x - y; break;
     case '*': result = x * y; break;
     case '/': result = x / y;
   }
   return result;
}

function clear(){
  $('#num1').val('');
  $('#num1').focus();
  $('#num2').val('');
  $('#op').val('');
  $('#result').text('');
}

function sum(a, b, c, d, e){
  var a =$('#num3').val();
  a = parseFloat(a);
  var b =$('#num4').val();
  b = parseFloat(b);
  var c=$('#num5').val();
  var d=$('#num6').val();
  var e=$('#num7').val();
  c = parseFloat(c);
  d = parseFloat(d);
  e = parseFloat(e);

  var result = a + b + c + d + e;
    $('#sumProduct').text(result);
        }

function product(a, b, c, d, e){
  var a =$('#num3').val();
  a = parseFloat(a);
  var b =$('#num4').val();
  b = parseFloat(b);
  var c=$('#num5').val();
  var d=$('#num6').val();
  var e=$('#num7').val();
  c = parseFloat(c);
  d = parseFloat(d);
  e = parseFloat(e);

  var result = a * b * c * d * e;
    $('#sumProduct').text(result);
}




