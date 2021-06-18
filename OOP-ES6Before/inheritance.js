function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function() {
    console.log("İsim: " + this.name + " Yaş: " + this.age);
}

    // const person = new Person("ömer",23);
    // console.log(person);

function Employee(name,age,salary) {
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age); // call - apply olayını constructor ile yaptık
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.showInfos = function() { // overriding
    console.log("isim: " + this.name + " yaş: " + this.age + " maaş: " + this.salary);
}

const emp = new Employee("mustafa",25,4000);
console.log(emp);
emp.showInfos();

console.log(emp);