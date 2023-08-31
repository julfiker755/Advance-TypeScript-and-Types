// TypeScript Normal functions
const createarry=(param:string):string[]=>{
    return [param]

}
// Genaric Function 1 parms pass-----
const createarry1=<T>(param:T):T[]=>{
    return [param]

}
const result1=createarry1<string>('banana')
const result2=createarry1<boolean>(false)
const result3=createarry1<{name:string}>({name:'julfiker'})


// Genaric Function 2 parms pass-----
const createarry2=<X,Y>(param1:X,param2:Y):[X,Y]=>{
    return [param1,param2]

}
const result11=createarry2<string,string>('banana','apple')
const result22=createarry2<boolean,Array<string>>(false,['usa'])

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
const curshfun=<T>(myinfo:T)=>{
    const cursh='i love you'
    const newdata={...myinfo,cursh}
    return newdata
}
const myinfo={
    name:'Julfiker',
    age:34,
    salary:5000000,
}
const curshresult=curshfun(myinfo)
// curshresult.salary