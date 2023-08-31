"use strict";
// any types
let emni;
emni = "Next web develoment lavel 2.0";
// (emni as number)
emni.length;
// <string>emni.length
// Type Assertion--------
function tokgGram(parm) {
    if (typeof parm === 'string') {
        const value = parseFloat(parm) * 1000;
        return `The converted value is ${value}`;
    }
    if (typeof parm === 'number') {
        const value = parm * 1000;
        return `The converted value is ${value}`;
    }
}
const resulttonumber = tokgGram(10);
const resulttostring = tokgGram('100');
try {
}
catch (err) {
    console.log(err.message);
}
