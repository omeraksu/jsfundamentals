    const object = new Object(); // object litereal
    const object2 = new Object();
    object.name = "ömer";
    console.log(object);


    function Employee(name,age) {
        this.name = name;
        this.age = age;
        this.showInfos = function() {
            console.log("Bilgiler");
        }
        this.toString = function(){
            console.log("bu bir employe");
        }
    }
    const emp1 = new Employee("ömer",23);
    console.log(emp1);
    console.log(emp1.toString()); // employee objemiz - Object() methodunun özelliklerini miral aldı
    console.log(emp1.toString()); // eğer ki bizim objemizde varsa onu çalıştırıyor yoksa en tepeye gidiyor

    function Employee(name,age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.showInfos = function() {
        console.log("isim: " + this.name + "\nYaş: "+ this.age);
    }

    const emp1 = new Employee("ömer",23);
    const emp2 = new Employee("ahmet",25);
    emp1.showInfos();
    console.log(emp1);