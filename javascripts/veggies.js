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