// any types
let emni:any;
emni="Next web develoment lavel 2.0";

// (emni as number)
(emni as string).length
// <string>emni.length


// Type Assertion--------
function tokgGram(parm:string | number):string | number | undefined{
  if(typeof parm === 'string'){
    const value=parseFloat(parm)*1000
    return `The converted value is ${value}`
  }
  if(typeof parm === 'number'){
    const value=parm*1000
    return `The converted value is ${value}`
  }
}
const resulttonumber=tokgGram(10) as number
const resulttostring=tokgGram('100') as string
// const resulttonumber=<number>tokgGram(10)
// const resulttostring=<string>tokgGram('100')


// error handeling types
type customtype={
 message:string
}
try{

}catch(err){
    console.log((err as customtype).message)
}