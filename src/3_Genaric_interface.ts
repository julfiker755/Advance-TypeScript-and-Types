// Genaric interface
interface Curshinterface<T,U=null>{
    name:string,
    husband:T,
    wife?:U
}

const cursh1:Curshinterface<boolean,string>={
    name:'love 3',
    husband:false,
    wife:'sumi'
}
const cursh2:Curshinterface<string>={
    name:'julfiker',
    husband:'boss',
}
// type declear
type objtype={name:string,salary:number}
const cursh3:Curshinterface<objtype>={
    name:'demo1',
    husband:{
        name:'demo 2',
        salary:55,
    },
}





