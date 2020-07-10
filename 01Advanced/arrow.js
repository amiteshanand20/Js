// const sayHello = function(name){
// return "hey there " +  name +" !"
// }
// console.log(sayHello('ami'))


// const sayHello =(name)=>{
//     return "hey there " +  name +" !"
//     }
//     console.log(sayHello('ami'))


// const sayHello =(name)=> `hey there  ${name} !`
    
//     console.log(sayHello('ami'))



const newTodos=[{
    title:"buy bread",
    isDone:true
},{
    title:'watch movies',
    isDone:false
},{
    title:'play pubg',
    isDone:false
}]

const thingsDone = newTodos.filter((todo)=>todo.isDone === false)

// console.log(thingsDone)


const cameras = {
    price:600,
    weight:800,
    desc: function(){
        return `this canon camera price is ${this.price}`
    }
}
console.log(cameras.desc())



// this is for redux
// const funct = () => ({key:'value'});
    