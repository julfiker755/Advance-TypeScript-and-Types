"use strict";
// genaric constraints for source codes------fos kora /badho koro
const curshfun1 = (myinfo) => {
    const cursh = 'i love you';
    const newdata = Object.assign(Object.assign({}, myinfo), { cursh });
    return newdata;
};
const myinfo1 = {
    name: 'Julfiker',
    age: 34,
    salary: 5000000,
};
const curshresult1 = curshfun1(myinfo);
