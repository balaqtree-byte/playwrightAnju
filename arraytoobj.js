//convertingobjects to variable
let a = {
    fname:"anju",
    lname:"bala"}

console.log(a)
//covert obj to variable
let{fname,lname}=a
console.log(fname)
console.log(lname)



function snding(welcome , callback){
    console.log("hello...", welcome)
    callback()
}

function bye(){
    console.log("bye.......")
}

snding("too",bye)


function onefunc(v1,v2,callback){
    let result = v1+v2
    callback(result)
}

function functwo(result)
{
    console.log(result)
}

onefunc(10,20,functwo)


