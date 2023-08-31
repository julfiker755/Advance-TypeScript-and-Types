// Strings Promise----
const makepromise=():Promise<string>=>{
    return new Promise<string>((resolve,reject)=>{
     const data:string="Data is fetch"
     if(data){
        resolve(data)
     }else{
        reject('Data is not fetch')
     }
    })
}

const getpromise=async():Promise<void>=>{
   const data=await makepromise()
   console.log(data)
}


// boolean Promise----
const makepromise1=()=>{
   return new Promise<boolean>((resolve,reject)=>{
    const data:boolean=true
    if(data){
       resolve(data)
    }else{
       reject('Data is not fetch')
    }
   })
}

const getpromise1=async():Promise<void>=>{
  const data=await makepromise1()
  console.log(data)
}
// Object Promise-----
interface objpromisetype{
   data:string;
}
// type objpromisetype={
//    data:string;
// }
const makepromise2=():Promise<objpromisetype>=>{
   return new Promise<objpromisetype>((resolve,reject)=>{
    const data:objpromisetype={data:'Hello I am fetch data for websites'}
    if(data){
       resolve(data)
    }else{
       reject('Data is not fetch')
    }
   })
}

const getpromise2=async():Promise<objpromisetype>=>{
  const data=await makepromise2()
  return data
}

// --
// {JSON} Placeholder
// --

interface fetchpromisetype{
   userId:number;
   id:number;
   title: string;
   completed: boolean;
 }
const fetchdata=async():Promise<fetchpromisetype>=>{
   const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
   return res.json()
}

const getfetchdata=async():Promise<void>=>{
   const result=await fetchdata()
  console.log(result)
}
getfetchdata()


//Exstra option--------------->>>>>>

// (async():Promise<void>=>{
//    const result=await fetchdata()
//    console.log(result)
// })()