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
	super();
	study(){
		console.log(this.name,"is studying");
	}
}

class Teacher extends Person {
	super();
	teach(){
		console.log(this.name,"is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
