// // // const days=['mon','tues','wed','thr','fri','sat']
// // // days.forEach(function(day,index){
// // //     console.log(`starts with ${index} : ${day}`)
// // // })

// // const months=['jan','feb','mar','april','may','june']
// // // months.forEach(function(month,index){
// // //     console.log(`start with ${index+1} : ${month}`)
// // // })



// // for(let i=months.length - 1;i>=0;i--)
// // {
// //     console.log(months[i])
// // }



const myTodos=[]
// myTodos.push('buy brush')
// myTodos.push('buy bread')
// myTodos.push('water the plants')

// myTodos.forEach(function(todo,index){
// console.log(`YOUR task no. is ${index + 1} is ${todo}`)

// })

myTodos.push('buy brush')
myTodos.push('buy bread')
myTodos.push('water the plants')

 for(let i=0;i<myTodos.length;i++){
     console.log(`your task no. ${i+1} is: ${myTodos[i]}`)
 }