//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	getter(){
		return this.name;
	}
	setter(age){
		this.age = age;
	}
}

class Student extends Person {
    constructor(name){
        super(name);
    }
	study(){
		console.log(this.name+" is studying");
	}
}

class Teacher extends Person {
    constructor(name){
        super(name);
    }
    
	teach(){
		console.log(this.name+" is teaching");
	}
}
let person1 = new Person("shemeer",24);
person1.age = 27;
let student1 = new Student("John");
student1.study();
let teacher1 = new Teacher("Alice");
teacher1.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
