//1. CREATE A FUNCTION THAT RETURNS AVERAGE OF FOUR NUMBERS (USE PARAMETERS)
 /*function addition (val1,val2,val3,val4){
    return (val1+val2+val3+val4)/4
    
 }
var total =addition(10,20,30,40)
console.log(total)

//2. USE SPREAD OPERATOR AND PRINT YOUR NAME

    let name = "anju"
    let age = 29
console.log(`my name is ${name} and my age is ${age}`) 

//3. PRINT 7TH TABLE IN REVERSE ORDER USING DO WHILE LOOP

let i = 70
do{
    console.log(i)
i=i-7

}

while(i>=7)


//4. CHECK WHETHER AN YEAR IS LEAP OR NOT 

function checkleap (year){
if (year % 400 == 0){
    console.log(year, "is a leap year")
} else if (year % 4 == 0) {
console.log(year, "is a leap year")
}
else{
  console.log(year, "is not a leap year")  
}
}
checkleap(2025)


//5. CREATE A FUNCTION THAT FINDS AREA OF SQUARE , ANOTHER FUNCTION THAT FINDS AREA OF TRIANGLE . USE AREA OF SQUARE AS A CALL BACK FUNCTION

function square(r, callback){
    var output = r*r
    console.log("area of square:" , output)
 return callback()

}

function triangle(l,h){
return 1/2 * l* h
}

var result = square(4,function(){
     console.log("area of triangle:",triangle(8,5))
})


//6. USE ASYNCHRONOUS OPERATION PRINT YOUR NAME, YOUR ADDRESS (WITH 6 SECONDS DELAY) AND YOUR FAVORITE COLOR

async function getname(){
console.log ("my name is anju")

}

async function getaddress(){
    setTimeout(()=>{
        console.log ("address is chennai")
    },6000)
}
 async function favcolor(){
    console.log ("fav color is pink")
 }

 getname()
 getaddress()
 favcolor()
 

 //7. A=[20,90,90,20,40] . DELETE BOTH 90, ITERATE THE ARRAY USING INDEX 

 a=[20,90,90,20,40]
 for(index = 0; index<a.length;index++){
    if(a[index]==90){
        a.splice(index,1)
        index--
    }
 }
  console.log(a)
 
//8. CREATE AN OBJECT THAT CONTAINS YOUR COURSE NAME, COURSE DURATION, TRAINER NAME. DISPLAY IT . THEN DESTRUCTURE IT TO VARIABLE

let detils1={
    "coursename" : "playwright automation",
    "courseduration":"2 months",
    "Trainername":"Dhivya"
}

console.log(detils1.coursename)
console.log(detils1.courseduration)
console.log(detils1.Trainername)

console.log("destrutuing to variable")
let {coursename,courseduration,Trainername} = detils1
console.log(coursename)
console.log(courseduration)
console.log(Trainername)



//9. CREATE A FILE THAT CONTAINS YOUR NAME (VARIABLE), FUNCTION THAT FINDS AVERAGE OF 
//THREE NUMBERS . USE NAMED EXPORTS  AND IMPORTS AND DISPLAY THE RESULT  

let myname = "anju"
function findavg(num1,num2,num3){
return num1*num2*num3
}

export {myname,findavg}


//10. PRINT YOUR COURSE NAME 20 TIMES USING FOR LOOP INSIDE A FUNCTION (TYPE 1) 
 
let coursenme="playwright"
function checkourse(){
for(let i =0 ; i<20 ; i++){
console.log(coursenme)
}
}

checkourse()


//11. CREATE A JSON DATA THAT CONTAINS YOUR DETAILS(NAME, AGE, ADDRESS,HEIGHT, WEIGHT). CONVERT IT TO JAVASCRIPT OBJECT 

let data1= `{
    "name":"anju",
    "age":29,
    "height":5,
    "weight":48
}`


let obj = JSON.parse(data1)
console.log(obj.name)
console.log(obj.age)
console.log(obj.height)
console.log(obj.weight)

*/

//12. CREATE A ASYNCHRONOUS FUNCTION THAT RETURNS PERIMETER OF SQUARE, CALL IT IN 
//ANOTHER FUNCTION (USE AWAIT KEYWORD)

async function squareperi(side){
return 4*side
}

async function output(){
    console.log("hello function 2 .......")
    let a = await squareperi(8)
    console.log(a)
    console.log("hello function 3 .......")
}

output()