"use strict";
// TypeScript Normal functions
const createarry = (param) => {
    return [param];
};
// Genaric Function 1 parms pass-----
const createarry1 = (param) => {
    return [param];
};
const result1 = createarry1('banana');
const result2 = createarry1(false);
const result3 = createarry1({ name: 'julfiker' });
// Genaric Function 2 parms pass-----
const createarry2 = (param1, param2) => {
    return [param1, param2];
};
const result11 = createarry2('banana', 'apple');
const result22 = createarry2(false, ['usa']);
// Spreed operator
// const cursh='i love you'
// const myinfo={
//     name:'Julfiker',
//     age:34,
//     salary:5000000,
// }
// const newdata={...myinfo,cursh}
// console.log(newdata)
// function use for data
const curshfun = (myinfo) => {
    const cursh = 'i love you';
    const newdata = Object.assign(Object.assign({}, myinfo), { cursh });
    return newdata;
};
const myinfo = {
    name: 'Julfiker',
    age: 34,
    salary: 5000000,
};
const curshresult = curshfun(myinfo);
// curshresult.salary
