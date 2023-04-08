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
   
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
   
    
	teach(){
		console.log(`${this.name} is teaching`);
	}
}
let person1 = new Person("shemeer",24);
person1.age = 27;
let student1 = new Student("John",30);
student1.study();
let teacher1 = new Teacher("Alice",30);
teacher1.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
