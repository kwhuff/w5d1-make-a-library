(function() {//IIFE immediately invoked functional expression
  'use strict'//adds a bunch of error checking extra stuff

  var one = function(selector){
    return document.querySelector(selector)
  }

  var capitalizeFirst = function(word){
    return word.charAt(0).toUpperCase() + word.substring(1)
  }

  var capitalizeAll = function(words){
    return words.split(' ').map(capitalizeFirst).join(' ')
  }
  var padLeft = function(word, char = '0', length = 2){//ANOTHER WAY TO SET DEFAULTS
    // char = char || '0' //DEFAULTS
    // length = length || 2 //DEFAULTS
    return char.repeat(length - 1) + word
  }

  window.dog = {//declaring our library name and making it an object.
    padLeft: padLeft,
    capitalizeFirst: capitalizeFirst,
    capitalizeAll: capitalizeAll,
    one: one,
  }
}())//this calls itself immediately.  Wrapping the entire function in () makes it produce a value





// function driveCar() {}
// //'higher order function'.  javascript puts higher priority on functions.  Functions can be used as arguments and values.
// var driveCar = function(callback) {
//   // console.log(callback)
//   // console.log(callback())
//   var stuffMessage = callback()
//   // alert(stuffMessage)
//   // alert(stuffMessage)
//   // alert(stuffMessage)
//
//   return function(){
//     alert('Hello From Your Car')
//   }
// }
//
// var greeting = driveCar(function() {
//   return 'Zoom!'
// })
//
// greeting()//only way to access the return value on line 7 is to set function equal to a variable name, then call the variable as a function.
//
//
//
// function makeFood(){
//
//   var lettuce = true
//
//   function makeTacos(){
//     var cheese = true
//     console.log(lettuce)
//   }
// }
//
// driveCar(function(){}) = driveCare(() => {})// same thing
