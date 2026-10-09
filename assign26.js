//1. print your age 5 times using for loop


for(i = 1 ; i<=5 ; i = i+1)
    {
    console.log("my age is:"  + 29)
}
   

//2.9th table in reverse order using do while

let i = 90
do{
    console.log(i)
    i=i-9
}
while(i>=9)
 

//3.check whether a number is greater than 5 or not

let a = 4
if (a>=5){
    console.log("number is greater than 5 ")
}
else{
    console.log ("number is less than 5")
}
    

//4.create a function that returns perimter of rectangle (2*(l+b))

function rectan()
{
    let l = 20 , b = 10
    return 2*(l+b)
}
console.log(rectan())


//5 . create a function that displays ur address
function address()
{
    console.log ("my address is:" , "Chennai")
}
address()


//6.create a function that finds body mass index (use parameter and return statement )
function BMI (weight , height){
return weight/height
}
var bmires = BMI(45,5.5)
console.log(bmires)


//7.create a function that returns area of quadrilateral 

function findsqr(side){
    return side*side
}
var ressqr = findsqr(4)
console.log(ressqr)

*/

//8.create a function that finds smallest of two numbers

function findsmall(num1 , num2){
if(num1<num2){
return num1
}
else{
return num2
}
}
console.log(findsmall(7,5))


