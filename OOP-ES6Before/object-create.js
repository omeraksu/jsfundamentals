    const obj = {
        test1: function() {
            console.log("test");
        },
        test2: function() {
            console.log("test2");
        }
    }

    const emp = Object.create(obj);
    emp.name = "ömer";
    emp.age = 23;
    console.log(emp);

    function Person() {

    }
    Person.prototype.test1 = function() {
        console.log("test1");
    }
    Person.prototype.test2 = function() {
        console.log("test2");
    }

    function Employee(name,age) {
        this.name = name;
        this.age = age;
    }

    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.myTest = function() {
        console.log("mytest");

    } 
    const emp = new Employee("ömer",23)
    console.log(emp);
    emp.test1();