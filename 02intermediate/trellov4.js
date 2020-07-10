const my =['bread','watch movies','play pubg']
// console.log(my[my.indexOf('play pubg')])


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

// const index=newTodos.findIndex(function(todo,index){
// console.log(todo)
// return todo.title==='watch movies'
// })
// console.log(index)

const findTodos =  function(anyTodo,title){
    const index=anyTodo.findIndex(function(todo,index){
        return todo.title.toLowerCase()===title.toLowerCase()
    })
return anyTodo[index]
}
let printMe=findTodos(newTodos,'play Pubg')
console.log(printMe)