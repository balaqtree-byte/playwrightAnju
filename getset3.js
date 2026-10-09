//default 

let name="anju"

let company = {
    get:function()
    {
        return name
    },
    set:function(value){
        name = value

    }

}

//export syntax
export default company