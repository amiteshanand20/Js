function myVal(){
    let myValue=document.getElementById('myForm').value;

    if(isNaN(myValue)|| myValue<1||myValue>20){
        console.log("not a valid input")
    }
    else{
        console.log('input ok')
    }
}

//form validation
document.querySelector('.myform').addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log(event.target.username.value)
    console.log(event.target.realname.value)
    event.target.username.value=''
    event.target.realname.value=''

})