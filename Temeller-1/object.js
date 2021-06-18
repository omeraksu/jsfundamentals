let value;
const programmer = { // örnek obje
    name: "ömer aksu",
    age: 23,
    email: "oaksu.me@gmail.com",
    langs: ["Swift","JavaScript","Python"],
    
    address: { // iç içe obje
        city: "Bursa",
        street: "Şirinevler"
    },

    work: function(){
        console.log("Wayyy karşimm");
    }
}

value = programmer;

value = programmer.email; // genel kullanım
value = programmer["langs"];

value = programmer.address.city;

programmer.work(); // obje içerisindeki methodu kullanma

const programmers = [
    {
        name: "Ömer", age:23
    },
    {
        name: "Faruk", age:23
    }
];
value = programmers[1].name; // Array içerisindeki şeylere erişim

console.log(value);