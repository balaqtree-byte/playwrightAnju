let details={
    "name":"anju",
    "address":"chennai",
    "height":5,
    "fav color":"pink",
    "courses":{
        "java":"yes",
        "python":"yes",
        "c#":"yes"
    },
    "languageknown":["english","tamil","hindi"]
}
console.log(details)
console.log(details.courses.java)
console.log(details.languageknown)


//parse
//json data -> javascript objects

let data = '{"address":"India","age":29}'
console.log("JSON data")
console.log(data)

let obj = JSON.parse(data)
console.log("javascript obj")
console.log(obj)


//stringify
let result = JSON.stringify(obj)
console.log("converted objec data")
console.log(result)


//try catch finally

try{
console.log (5/2)
}
catch(error){
console.log(error.message)
}
finally{
console.log("always execute")
}


let a = 30 , b = 20
if(a>b){
    throw new Error ("a is bigger")
}
else{
    console.log("b is bigger")
}

