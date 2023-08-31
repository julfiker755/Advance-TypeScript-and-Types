// a type is dependent on another type
type a1=number
type a2=a1 extends string ? string : null
// nested conditional type
type b1=number
type b2=string
type b3=number
type b=b1 extends string ? string : b2 extends  number ? number :b3 extends boolean ? boolean : 'boss'

type sheikh={
    wife1:string;
    wife2:string;
}

// type checkproperty<T>= T extends {wife2:string} ? true:false
// type checkwife=checkproperty<sheikh>

// keyof use better solutions----
// type A=keyof  sheikh //'wife1' | 'wife2'

//                       wife1 extends 'wife1'|'wife2'
type checkproperty<T,K>= K extends keyof sheikh ? true:false
type checkwife=checkproperty<sheikh,'wife1'>

// how to use remove peropery--union type a kno value takle++ bad hoy
type friends='Rasel'|'tapus'|'shuvo'
type removefriends<T>=T extends 'shuvo' ? never : T
type friendsvalue=removefriends<friends>

// Dynamic types
type friends1='Rasel'|'tapus'|'shuvo'
type removefriends1<T,F>=T extends F ? never : T
type friendsvalue1=removefriends1<friends,'tapus'>