//named export
//named imports

let company = "qtree"

//let functionname =function(){}
 let get = function(){
    return company.toUpperCase()
 }

 let set = function(value){
    company = value
 }

 //export {comp, comp, comp...n}
 export{company , get , set} //named exports
 