(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
// pull in the module(s) you'll need to fetch the toppings' prices
const breads = require("./bread");
const meats = require("./meat"); //If this is the path to your meat.js file, how do you need to structure your files to make this work?
const cheeses = require("./cheese");
const condiments = require("./condiments");
const veggies = require("./veggies");
// Variable to hold the price of the sandwich. Default to 0.
var sandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat");
var cheeseChooser = document.getElementById("cheese");
var breadChooser = document.getElementById("bread");
var condimentsChooser = document.getElementById("condiments");
var veggiesChooser = document.getElementById("veggies");
var displayPrice = document.getElementById("price");
// console.log(meatChooser);
/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

// const makeSandwich = function(event) {
//   meatChooser.addEventListener("change", function(event) {
//     // Get the value chosen from the DOM
//       selectedTopping = event.target.value;
//       // selectedTopping = this.selectedIndex;
//       console.log(selectedTopping);
//     // Determine the price of the topping chosen
//       sandwichPrice += meats.addMeat(selectedTopping);
//     // Add the price to the total price and update the DOM to display the sandwich cost
//       console.log("meat event");
//       displayPrice.innerHTML = sandwichPrice;
//   });
  
// };
let prevBread=0;
let prevMeat=0;
let prevCheese=0;
let prevCondiment=0;
let prevVeggie=0;
const allSelectors = document.querySelectorAll(".ing");
console.log(allSelectors);
const makeSandwich = function(event) {

  allSelectors.forEach(function(topping){
    // let targetSelector = this.target.value;
    
    topping.addEventListener("change", function(ev) {
      switch (this.id) {
        case 'bread': 
        sandwichPrice -= prevBread;
          let thisBread = breads.addBread(this.value);
          sandwichPrice+= thisBread;
          prevBread = thisBread;
          console.log("prevBread", prevBread);
          break;
        case 'meat': 
        sandwichPrice -= prevMeat;        
          let thisMeat = meats.addMeat(this.value);
          sandwichPrice += thisMeat;
          prevMeat = thisMeat;
          console.log("prevMeat", prevMeat);          
          break;
        case 'cheese': 
          sandwichPrice -= prevCheese;        
          let thisCheese = cheeses.addCheese(this.value);
          sandwichPrice+= thisCheese;
          prevCheese = thisCheese;
          console.log("prevCheese", prevCheese); 
          break;
        case 'condiments': 
          sandwichPrice -= prevCondiment;        
          let thisCondiment = condiments.addCondiments(this.value);
          sandwichPrice+= thisCondiment;
          prevCondiment = thisCondiment;
          console.log("prevCondiment", prevCondiment); 
          break;
        case 'veggies': 
          sandwichPrice -= prevVeggie;        
          let thisVeggie = veggies.addVeggie(this.value);
          sandwichPrice+= thisVeggie;
          prevVeggie = thisVeggie;
          console.log("prevVeggie", prevVeggie); 
          break;
          default:
          break;
        }
        displayPrice.innerHTML = sandwichPrice.toFixed(2);      
      });
    });
  };

  module.exports = { makeSandwich};

},{"./bread":3,"./cheese":4,"./condiments":5,"./meat":6,"./veggies":7}],2:[function(require,module,exports){
"use strict";

const sandwich = require("./DOMhandler");
sandwich.makeSandwich();
},{"./DOMhandler":1}],3:[function(require,module,exports){
"use strict";
let breadPrices = { 
    white: 2, 
    wheat: 2.5,
    banana: 5
 }; 

const addBread = function(breadSelection) {
    return breadPrices[breadSelection]; 
};

module.exports = { addBread };
},{}],4:[function(require,module,exports){
"use strict";
let cheesePrices = { 
    cheddar: 2, 
    swiss: 2.5,
    american: 0.5,
    cottage: 4
 }; 

const addCheese = function(cheeseSelection) {
    return cheesePrices[cheeseSelection]; 
};

module.exports = { addCheese };
},{}],5:[function(require,module,exports){
"use strict";
let condimentsPrices = { 
    mayo: 0.5, 
    mustard: 0.5,
    none: 2 // double lmao
 }; 

const addCondiments = function(condimentsSelection) {
    return condimentsPrices[condimentsSelection]; 
};

module.exports = { addCondiments };
},{}],6:[function(require,module,exports){
"use strict";
let meatPrices = { 
    ham: 0.75, 
    turkey: 1.25,
    bacon: 1.00,
    pastrami: 2.00,
    none: 0
 }; 

const addMeat = function(meatSelection) {
    return meatPrices[meatSelection]; 
};

module.exports = { addMeat }; //What exactly is being exported here?
},{}],7:[function(require,module,exports){
"use strict";
let veggiePrices = { 
    lettuce: 1, 
    tomato: 1.5,
    onion: 1,
    none: 0.5 //lmao
 }; 

const addVeggie = function(veggieSelection) {
    return veggiePrices[veggieSelection]; 
};

module.exports = { addVeggie };
},{}]},{},[2]);
