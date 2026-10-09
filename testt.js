let numsort=[11,20,10,9,0,8]
//numsort.sort()
//console.log(numsort)

for(let index=0;index<numsort.length;index++){
    console.log(numsort[index])
}

//using for-in

for(let index in numsort)
{
    console.log("for-in....",numsort[index])
}

//iteration using element
for(let element of numsort){
    console.log("element sort....",element)
}

numsort.forEach((e)=>{
    console.log("iteration for each..",e)
})



//map
let testarr = [2,7,8,30,20]
function mapfunc(value){
    return value+2
}
 let res = testarr.map(mapfunc)
console.log("mapfunc",res)

//filter
let rr = [2,7,8,9,4,22]
function filfunc(value){
    return value%2==0
}
let ress = rr.filter(filfunc)
console.log("filterfunc...",ress)

