function sample(){
    console.log("task1")
    setTimeout(()=>{console.log("task2")

    },4000)
    
    console.log("task3")
}
sample()


function sample1(){
    setTimeout(()=>{console.log("task1...")

    },2000)
    console.log("task2..")
    setTimeout(()=>{ console.log("task3...")

    },1000)
   
    console.log("task4..")
}
sample1()