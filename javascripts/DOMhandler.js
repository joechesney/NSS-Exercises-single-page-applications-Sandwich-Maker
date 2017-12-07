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
