let sayHello = function(name){
    console.log(`greeting msg for ${name}`)
    console.log(`hey ${name}`)

}

// sayHello('john')



let fullNameMaker= function(firstname,lastname){
    console.log("welcome to ami")
    console.log(`happy to have u ${firstname} ${lastname}`)
}
// fullNameMaker('amitesh','anand')


let myAdder= function(num1,num2){
    let result=num1 +num2
    return result
}
// console.log(myAdder(4,5))

let myMultiplier=function(num1,num2){
    let multiplied=num1*num2
    return multiplied
}
// console.log(myMultiplier(3,4))

let guestUser= function(name='unName',courseCount=0){
    return "hello "+ name + " and your couse count is: " + courseCount
}
console.log(guestUser())
console.log(guestUser('john',12))
