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