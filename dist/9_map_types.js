"use strict";
const arrayofnumber = [1, 2, 3, 4];
const arrayofnumberoutput = arrayofnumber.map(number => number.toString());
// output
const areaoutput = {
    height: 10,
    width: 10,
};
const arearesult = { width: 'dd', height: 10 };
// read only------------
// type Area1<T>={
//    readonly [key in keyof T]:T[key]
// }
// const arearesult:Area1<{width:string,height:number}>={width:'dd',height:10}
