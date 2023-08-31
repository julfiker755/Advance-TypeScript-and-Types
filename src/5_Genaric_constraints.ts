// genaric constraints for source codes------fos kora /badho koro
const curshfun1=<T extends {name:string,age:number,salary:number}>(myinfo:T)=>{
    const cursh='i love you'
    const newdata={...myinfo,cursh}
    return newdata
}
type myinfotype={
    name:string,
    age:number,
    salary:number,
}

const myinfo1:myinfotype={
    name:'Julfiker',
    age:34,
    salary:5000000,
}
const curshresult1=curshfun1<myinfotype>(myinfo)