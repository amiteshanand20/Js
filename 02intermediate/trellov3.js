let myTodos={
    day:"monday",
    meetings:0,
    meetDone:0,
    addMeeting:function(num){
        this.meetings=this.meetings+num
    },
    summary:function(){
        return `you have ${this.meetings} meetings today!`
    }
}

myTodos.addMeeting(6)
console.log(myTodos.summary())