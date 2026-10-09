//promise

let p = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        let number = 30
        if(number%5==0){
            resolve(number)
        }else{
            reject(new Error("number not divided by 5"))
        }
    },4000)

})
p.then(result=>{console.log(result)})
.catch(error=>{console.log(error)})

.finally(()=>{console.log("bye")})
