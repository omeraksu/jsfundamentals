// Syntactic Sugar

// EcmaScript5

    // function Employee(name,age,salary){
    //     this.name = name;
    //     this.age = age;
    //     this.salary = salary;
    // }
    // Employee.prototype.showInfos = function() {
    //     console.log("isim: " + this.name + " yaş: " + this.age + " Maaş: " + this.salary);
    // }
    // const empt = new Employee("ömer",23,4000);
    // console.log(empt);

// EcmaScript6

    class Employee {
        constructor(name,age,salary){ // constructor
            this.name = name;
            this.age = age;
            this.salary = salary;
            this.showInfos = this.showInfos.bind(this)
        }
        showInfos(){
            console.log("İsim: " + this.name + "\nYaş: " + this.age + "\nMaaş: " + this.salary);
        }
    }
    const emp = new Employee("ömer",23,5000);
    emp.showInfos();
