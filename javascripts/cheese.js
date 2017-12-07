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