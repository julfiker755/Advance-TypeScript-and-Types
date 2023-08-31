// step 1+++++++++++++++++++++++
type Persontype={
    name:string,
    age:number,
    address:string,
}

// nooe:2 ta akoi kaj kore best pratic keyof

type newtype="name" | "age"| "address"  //menully korchi
type newtypekeyof=keyof Persontype

// answer type here
const a:newtype="address"

const b:newtypekeyof='name'

// step 2++++++++++...why  use  for example
// Question:--({name:'Mr x',age:100},"age") //result=100
// normal function 
// function getproperty(obj:object,key:string){
//   return obj[key]
// }

// const resultget=getproperty({name:'julfiker',age:100},'tt')

// genaric functios
function getproperty<X,Y extends keyof X>(obj:X,key:Y){
    return obj[key]
  }
  
  const resultget=getproperty({name:'julfiker',age:100},'name')