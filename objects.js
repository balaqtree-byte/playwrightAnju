//objects: contains variable and function

let details = {
    name:"anju",
    age:29,
    address:"chennai",
    addition:function(a,b){
        return a*b
    },
    display:function(){
console.log("hello display function")
    }

}

console.log(details.name)
console.log(details.age)
console.log(details.address)
console.log(details.addition(2,3))
details.display();