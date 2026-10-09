let n = "anju" //global scope

function f1(){
    let age = 30
    console.log(n)
    console.log(age) // function scope
}

f1()

console.log(n)
//console.log(age)


//block scope

if(true){
    let city = "madurai";
    let name = "anju";
    let age = 30;
    console.log(city)
}
console.log(city)


