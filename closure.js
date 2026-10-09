function outer(){
    let name = "anju"
    function inner(){
        return name
    }
    return inner
}
let result = outer()
console.log(result())