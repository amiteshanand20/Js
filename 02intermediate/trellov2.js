let myTodos={
    day:"monday",
    meetings:0,
    meetDone:0
}

let addMeeting=function(todo,meet=0){
    todo.meetings=todo.meetings+meet

}

let meetDone=function(todo,meet=0){
todo.meetDone=todo.meetDone - meet
}

let resetDay=function(todo){
    todo.meetings=0
    todo.meetDone=0
}

let summaryOfDay=function(todo){
    let meetLeft=todo.meetings+todo.meetDone
    return `you have ${meetLeft} meetings!`

}

addMeeting(myTodos,4)
addMeeting(myTodos,2)

meetDone(myTodos,5)

console.log(myTodos) 

console.log(summaryOfDay(myTodos))
