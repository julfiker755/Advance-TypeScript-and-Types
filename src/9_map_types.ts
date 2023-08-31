const arrayofnumber=[1,2,3,4]
const arrayofnumberoutput=arrayofnumber.map(number=>number.toString())
// console.log(arrayofnumberoutput)
type Areanumber={
    height:number;
    width:number;
}
type Areastring={
    height:string;
    width:string;
}
type areareadonly={
   readonly height:number;
   readonly width:number;
}


// output
const  areaoutput: areareadonly={
    height:10,
    width:10,
}
// areaoutput.height=10

type A=Areanumber['height']       //look up types
type B=keyof Areanumber;          //'width'|'height'

// const obj={
//     name:'person'
// }
// obj['name']

// dynamic main part --------------Just fun ha ha ha ha ha
// type Area={
//     [mapping koro]:string
// }
// type Area={
//     [key in 'width'|'height']:string
// }
type volume={
    width:number;
    height:string;
    area:number;
}
type Area={
    // [key in keyof volume]:boolean
    [key in keyof volume]:volume[key]
}

// genaric types
type Area1<T>={
    [key in keyof T]:T[key]
}

const arearesult:Area1<{width:string,height:number}>={width:'dd',height:10}

// read only------------
// type Area1<T>={
//    readonly [key in keyof T]:T[key]
// }
// const arearesult:Area1<{width:string,height:number}>={width:'dd',height:10}