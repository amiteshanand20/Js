let username="art"
let pass='art@123456778'

let check=function(myString){
    if((myString.includes(123))&&(myString.length >8)){
        return true
    }
    else{
        return false
    }
}

console.log(check(username))

let passwordCheck=function(code){
    if((code.includes('@123'))&&(code.length >8)){
        return true
    }
    else{
        return false
    }
}

console.log(passwordCheck(pass))