// const RollNumber:Array<number>=[44,77,99,44,1]
// const RollNumber2:Array<string>=["44","77","99","44","1"]
// const RollNumber3:Array<boolean>=[true,false]

// const usernameandrollnumber:Array<{name:string,roll:number}>=[
//     {
//         name:'Mr. x',
//         roll:66,
//     },{
//         name:'Mr. Y',
//         roll:77,
//     }
// ]

// genaric types --------

type Genarictypes<T>=Array<T>
const RollNumber:Genarictypes<number>=[44,77,99,44,1]
const RollNumber2:Genarictypes<string>=["44","77","99","44","1"]
const RollNumber3:Genarictypes<boolean>=[true,false]

const usernameandrollnumber:Genarictypes<{name:string,roll:number}>=[
    {
        name:'Mr. x',
        roll:66,
    },{
        name:'Mr. Y',
        roll:77,
    }
]
// Genaric tupple
type Genarictupple<x,y>=[x,y]
const relation:Genarictupple<string,string>=['tumi','ami']
// const relationwidthsalary:Genarictupple<object,string>=[
// {
//     name:'boss',
//     salary:999,
// },

// 'julfiker'
// ]



// type aliastype={name:string,salary:number}
interface aliasinterface{
    name:string,
    salary:number
}
const relationwidthsalary:Genarictupple<aliasinterface,string>=[{
    name:'boss',
    salary:999,
},

'julfiker'
]