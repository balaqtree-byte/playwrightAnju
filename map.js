 
 //map
 let a = [2,4,6,8,10]

function mapfunc(value){
    return value*2
}
 
let ans = a.map(mapfunc)
console.log(ans)

//filter in map

let fil = [2,1,7,9,5,12,6,8]
function filfunc(value){
return value%2==0
}

let filans = fil.filter(filfunc)
console.log(filans)


//reduce in map

let redu = [3,4,5]
function redufunc(a,b){
return a*b
}

let ansredu = redu.reduce(redufunc)
console.log(ansredu)

