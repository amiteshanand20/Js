class user{
    constructor(firstname,lastname,credits){
        this.firstname=firstname;
        this.lastname=lastname;
        this.credits=credits;
    }
    getfullname(){
        let name =`${this.firstname} ${this.lastname} is my fullname`
        return name
    }
    editName(newName){
        const myname=newName.split(' ')
        this.firstname=myname[0]
        this.lastname=myname[1]
    }
}

class Teacher extends user{
    constructor(firstname,lastname,credits,subject){
        super(firstname,lastname,credits)
        this.subject=subject
    }
}

const ram = new user('ram','pandey',34)
console.log(ram)
console.log(ram.getfullname())
ram.editName('ramesh pandey')
console.log(ram.getfullname())