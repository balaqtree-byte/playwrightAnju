function work(){
console.log("task1..")
setTimeout(()=>{


console.log("task2..")
},4000)
console.log("task3..")
setTimeout(()=>{
    console.log("task4...")},2000)
    
console.log("task5..")
}

work()