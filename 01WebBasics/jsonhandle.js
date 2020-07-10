const student = {
    name:'hitesh',
    age:23,
    gen: 'male'
}

var studentObj = JSON.stringify(student)
console.log(typeof studentObj)

//  localStorage.setItem('student', studentObj)

var tojson = JSON.parse(studentObj)
console.log( typeof tojson)
console.log(tojson.age)