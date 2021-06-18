const person = {
    name:"ömer aksu",
    age:23,
    salary:4000
};

const langs = ["python","java","c++","php"];
const name = "ömer";

// for in

// object
    for (let prop in person){
        console.log(prop,person[prop]);
    }


// Array
    for (let index in langs){
        console.log(index,langs[index]);
    }

// string
    for(let index in name){
        console.log(index,name[index]);
    }


// for of - sadece array ve türevlerinde gezinebiliriz

// Array
    for(let value of langs){
        console.log(value);
    }

// String
    for(let character of name){
        console.log(character);
    }