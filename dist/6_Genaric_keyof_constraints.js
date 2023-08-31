"use strict";
// answer type here
const a = "address";
const b = 'name';
// step 2++++++++++...why  use  for example
// Question:--({name:'Mr x',age:100},"age") //result=100
// normal function 
// function getproperty(obj:object,key:string){
//   return obj[key]
// }
// const resultget=getproperty({name:'julfiker',age:100},'tt')
// genaric functios
function getproperty(obj, key) {
    return obj[key];
}
const resultget = getproperty({ name: 'julfiker', age: 100 }, 'name');
