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