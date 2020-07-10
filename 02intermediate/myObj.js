let myYoutubeOne={
    title:"learning",
    length: 16 ,
    creator:"ami"
}

let myYoutubeTwo={
    title:"learning",
    length: 10 ,
    creator:"ami"
}
// // console.log(`youtube video on ${myYoutube.title} by ${myYoutube.creator} of length ${myYoutube.length}`)


//ASSIGNMENT 



// let myCourse= {
//     title:"java",
//     author:"cdp",
//     price:"100 rs"
// }
// console.log(`Hey! There is a new course on ${myCourse.title} by ${myCourse.author} available at price ${myCourse.price}`)




//EXAMPLE

let change =function(myObj){
return {
    formatOne:`now the video length is : ${myObj.length + 2}`,
    formatTwo:`now the video length is : ${myObj.length + 6}`
}
}
let res=change(myYoutubeOne)
console.log(res.formatOne)
console.log(res.formatTwo)