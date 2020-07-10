// // console.log(document.documentURI)
// const doc=document.querySelector('p')
// doc.textContent='this is chnaged'
// console.log(doc)

const doc= document.querySelectorAll('p')
doc.forEach((p)=>p.textContent='i m changed using loop in js'
)


const myNewPara =document.createElement('p')
myNewPara.textContent='This is added by AA'
document.querySelector('body').appendChild(myNewPara)


// document.querySelector('button').addEventListener('click',()=>{
//     console.log('button was pressed')
// })

document.querySelector('button').addEventListener('click',(event)=>{
   event.target.textContent='i was clicked'
})

//track input form
document.querySelector('#myForm').addEventListener('input', (event)=>{
    console.log(event.target.value);
})