let myGrade=function(currentMarks,totalMarks){
    const percent=(currentMarks/totalMarks)*100
    let grade=''
    if(percent>=90){
        grade='A'
    }else if(percent>=80){
        grade='B'
    }
    else if(percent>=70){
        grade='C'
    }
    else if(percent>=60){
        grade='D'
    }
    else {
        grade='F'
    }
    return `your percentage is ${percent} and grades is ${grade}`
}

console.log(myGrade(70,100))