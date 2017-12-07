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