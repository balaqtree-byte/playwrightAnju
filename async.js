//asycronize
//promised result

async function f1(){
    console.log("async promised")
    return 4
}
f1().then(result=>(console.log(result)))

//promised error

async function f2(){
    console.log("throw error")
    throw new Error("error.....")
}
f2().catch(error=>(console.log(error)))


//using promise keyword async functionalty
async function calculation(){
    return new Promise((resolve,reject)=>{
        //random number between 0 and 1
        let number = Math.random()
        console.log(number)
        setTimeout(()=>{
            if(number>0.5){
                resolve(number)
            }
            else{
                reject(new Error("number s less than 0.5"))
            }
        },5000)
    })
}
calculation().then(result=>{console.log(result)})
.catch(error=>{console.log(error)})