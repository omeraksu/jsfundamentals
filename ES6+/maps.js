    let myMap = new Map();

    console.log(myMap);

    const key1 = "ömer";
    const key2 = {a:10,b:20};
    const key3 = () => 2;

// set -> iteler
    myMap.set(key1,"string değer");
    myMap.set(key2,"object değer");
    myMap.set(key3,"fonksiyon değer");

// Get -> getirir
    console.log(myMap.get(key1));
    console.log(myMap.get(key2));
    console.log(myMap.get(key3));
    console.log(myMap);
    console.log(myMap.size);

// ----------------------------------

    const cities = new Map();
    cities.set("bursa",3);
    cities.set("istanbul",12);
    cities.set("ankara",4);

// forEach
    cities.forEach(function(value,key){
        console.log(key,value);
    })


// For Of
    for(let [key,value] of cities){ // destructing
        console.log(key,value);
    }

// Maps Keys
    for (let key of cities.keys()) {
        console.log(key);
    }

// Maps Values
    for(let value of cities.values()) {
        console.log(value);
    }

// Arraylerden Map oluşturma
    const array = [["key1","value1"],["key2","value2"]];
    const lastMap = new Map(array);
    console.log(lastMap);

// Map'den Array Oluşturma
    const cities = new Map();
    cities.set("bursa",3);
    cities.set("istanbul",12);
    cities.set("ankara",4);
    const array = Array.from(cities);
    console.log(array);
//  [["bursa",3],["istanbul",12],["ankara",4]] -> başına gelen şey bu