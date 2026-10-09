let a = ["anju", 1,2,3,"hari", "magilu", "c" , "anju"]
console.log(a)

//finding index length
console.log(a.length)

//push : add element last from the array
a.push("last")
console.log(a)

//unshift : add element first
a.unshift("first")
console.log(a)

//splice : index , starting index , element
a.splice(2,0,"hello")
console.log(a)

//deleting element at last
a.pop()
console.log(a)

//deleting element at first

a.shift()
console.log(a)

//deleting the item on middle index based
delete a[1]
console.log(a)

//changing the value
a[1]="anjuma"
console.log(a)

//revers the arrays value
a.reverse()
console.log(a)

//finding first occurence of the value
console.log(a.indexOf('anju'))

//finding last occurrenc of the value
console.log(a.lastIndexOf("anju"))


//sorting the arry
let b = [2,6,9,4,7]
//b.sort()
//console.log("sorting" , b)

//using for loop visiting all index 

for (let index = 0; index<b.length;index++){
    console.log(b[index])
}

//using for-in visiting all index

for(let index in b){
    console.log(b[index])
}

//iteration using elements
for(let element of b)
{
    console.log(element)
}

//using for each
b.forEach((e)=>{
    console.log(e)
})