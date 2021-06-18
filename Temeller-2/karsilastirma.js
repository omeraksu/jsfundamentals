// Karşılaştırma operatörleri
/* 
    == 
    ===
    != eşit değil midir?
    >
    <
    >=
    <=
*/

console.log(2 == 2); // true

console.log("js" == "java"); // false

console.log("2" == 2); // true

console.log("2" === 2); // false

console.log(4 > 2); // true

console.log(2 < 4); // true

console.log(2 <= 4); // true

console.log(2 >= 4); // false

console.log(2 != 4); // true

// Mantıksal Bağlaçlar
console.log(!(2 != 2)); // ! -> not operatörü. değeri true ise false, false ise true'a çevirir

console.log((2 == 2) && ("ömer" == "ömer")); // && -> and operatörü, iki tarafın da true olması gerekir sonuç true olması için

console.log((2 == 5) || ("ömer" == "ömer")); // || -> or operatörü, 1 taraf true olması durumunda sonuç true döner
