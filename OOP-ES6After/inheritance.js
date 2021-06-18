// EcmaScript5

    // function Person(name,age) {
    //     this.name = name;
    //     this.age = age;
    // }

    // Person.prototype.showInfos = function() {
    //     console.log("İsim: " + this.name + " Yaş: " + this.age);
    // }

    //     // const person = new Person("ömer",23);
    //     // console.log(person);

    // function Employee(name,age,salary) {
    //     // this.name = name;
    //     // this.age = age;
    //     Person.call(this,name,age); // call - apply olayını constructor ile yaptık
    //     this.salary = salary;
    // }

    // Employee.prototype = Object.create(Person.prototype);

    // Employee.prototype.showInfos = function() { // overriding
    //     console.log("isim: " + this.name + " yaş: " + this.age + " maaş: " + this.salary);
    // }

    // const emp = new Employee("mustafa",25,4000);
    // console.log(emp);
    // emp.showInfos();

    // console.log(emp);


// EcmaScript 6

    class Person {
        constructor(name,age,salary) {
            this.name = name;
            this.age = age;
            this.salary = salary;
        }
        showInfos() {
            console.log("İsim: " + this.name + " Yaş: " + this.age);
        }
    }

    class Employee extends Person {
        constructor(name,age,salary) {
            // this.name = name;
            // this.age = age;
            super(name,age); // person.call yerine geçen olay burasa super() methodu. 
            this.salary = salary;
        }
        showInfos(){ // override
            console.log("İsim: " + this.name + "\nYaş: " + this.age + "\nMaaş: " + this.salary);
        }
        raiseSalary(amount){ // ekstra
            this.salary += amount;
        }
    }

    const emp = new Employee("ömer",23,5000);
    emp.raiseSalary(500);
    console.log(emp);
    emp.showInfos();