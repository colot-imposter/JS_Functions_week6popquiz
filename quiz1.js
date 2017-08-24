console.log('quiz-1');

function begin() {
	console.log("begin");
}
begin();

// ECHO
// Write an "echo" function that returns the value that is passed to it.
// For example if you pass the string 'hello' to the function then it should return 'hello'.
// For example if you pass the string 'the iron yard' to the function then it should return 'the iron yard'

function echo(){
  console.log('hello');
}
echo()


// MATH
// Write a "math" function that returns the result of adding the first two paramaters and then multiply that by the third parameter.
// For example if you pass 3,4,2 as arguments the function should return 14.
// For example if you pass 5,5,7 as arguments the function should return 70.

function echo(aa, bb, cc){
let jarjar=(aa*bb)*cc
console.log(jarjar);
}
echo(3,4,2)
//
// TOSTRING
// Write a "toString" function that takes a array of strings and returns a string representation with spaces between the strings of the array
// For example if you pass the array ['now','is','the','time'] the function should return 'now is the time'.
// For example if you pass the array ['the','iron','yard'] the function should return 'the iron yard'.
// It is ok to have a trailing space after the last word.

let timer = ['now','is','the','time']

function tostring(a){
  let arrayd=""
  a.forEach(function(e){
    e+= arrayd
  })
}

tostring(timer)
//
// CALLME
// Write a "callme" function that takes a function as a parameter (i.e. what we have been calling a callback function) and invokes the callback function. console.log('in first function') when entering the callme function and console.log('in second function') when entering the callback function.
// The output should be:
// in first function
// in second function

function callMe(h){
  console.log('in first function');

  scnd(){
  let scnDD= "in second function"


  console.log(gerald(scnDD))
}
}


// CALLME2
// Copy the"callme" function to a "callme2" function. The callme2 function takes an additional parameter which is a string. When callme2 invokes the callback function it should pass the string as an argument to the callback function. The callback function should console.log the parameter.
// Assuming the string passed to callme2 is 'hello' the output should be:
// in first function
// in second function
// hello

function callMe(z,x){
  console.log('in first function');
  .then(){
  let scnDD= "in second function"
  console.log(gerald(scnDD))
return p}
  .then(console.log(p);)

//
// REVERSE
// Write a "reverse" function that takes a string as input and returns the string with the letters reversed.
// For example if you pass the string 'hello' to the function then it should return 'olleh'
// For example if you pass the string 'the iron yard' to the function then it should return 'dray nori eht'
stringed= 'the iron yard'
function reverse(a){
  for (var i = 0; i < stringed.length; i++) {
    stringed[i].charAt()
  }
}
//

// SLEEP
// Write a "sleep" function that sleeps for 1 second (which is 1000 milliseconds). Use 'Date.now()' to get the current time in milliseconds.
// console.log('before sleep loop') before entering the loop to sleep and console.log('after sleep loop') when the loop is done.
// The output should be (with approximately 1 second between them):
// before sleep loop
// after sleep loop
// sleep Write a "sleep" function that sleeps for 1 second (which is 1000 milliseconds). Use 'Date.now()' to get the current time in milliseconds. console.log('before sleep loop') before entering the loop to sleep and console.log('after sleep loop') when the loop is done. The output should be (with approximately 1 second between them): before sleep loop after sleep loop
