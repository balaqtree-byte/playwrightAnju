/*async function f1(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("hi")

        },50000)
    })

}

async function f2(){
    let message = await f1()
    console.log(message)
    console.log("bye")
}
f2() */

//await will be used only asynchoried function
async function f2(a,b){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (a*b)

        },3000)
    })

}

async function f3(){
    let message = await f2(5,2)
    console.log(message)
    
}
f3()
