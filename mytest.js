//

let test = [1,2,6,8,9,3]
function testfun(value){
    return value%2==0
}

let a= test.map(testfun)
//console.log(a)

let b = test.filter(testfun)
console.log(b)