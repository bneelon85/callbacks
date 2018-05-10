function add(x, y,callback) {
  var result = x + y;
  callback(result);
}

add(2,4,function(result) {
 console.log("The answer is "+result);
 });


function subtract(x, y,callback) {
  var result =  x - y;
  callback(result);
}

subtract(9,4,function(result) {
 console.log("The answer to the subtraction problem is "+result);
 });

function greeting(person, callback) {
  var response = 'Hola, ' + person + '!';
  callback(response);
}

greeting('Angela', function(response) {
    console.log(response);
})


function product(numbers, callback) {
    setTimeout( function(){
  var prod =  numbers.reduce(function(a, b) {
    return a * b;
  }, 1);
  callback(prod);
    }, 1000);
}

var x = [2,5,6]

product(x,function(prod){
    console.log("The product of this array is "+prod);
})