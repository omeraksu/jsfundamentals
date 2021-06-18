// console.log(this); // Global scope

// const emp1 = { // object literal
//     name:"ömer",
//     age:23,
//     showInfos:function(){
//         console.log("geldi");
//     }
// }
// const emp2 = {
//     name:"ahmet",
//     age:23
// }
// emp1.salary = 4000;
// emp1.showInfos();
// console.log(emp1);


// function Employee(name,age,salary) { // yapıcı fonksiyon - constructor
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

//     this.showInfos = function() {
//         console.log(this.name,this.age,this.salary);
//     }
// }
// const emp1 = new Employee("ömer",23,4000);
// const emp2 = new Employee("ahmet",25,2222);

// emp1.showInfos();
// emp2.showInfos();


console.log(this) // en temel obje windowdur

const emp1 = {
    name: "ömer",
    age: 23,
    showInfos: () => {
        console.log(this)   
    }
}

emp1.salary = 4000;



function Employe(name,age,salary){ // constructor - Yapıcı fonksiyon
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.showInfos = function() {
        console.log(name)
        console.log("sen aslında " + this.name +"'sin ve " + this.age +" yaşındasın")
    }
}
const emp51 = new Employe("ömer",23,123)
emp51.showInfos()