let value;

// Stringe Çevirme
value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function(){console.log()});
value = String([1,2,3,4,5]); // her şey stringe çevrilebilinir. 
value = (19).toString(); // aynı şey aslında

// Number'a Çevirme
value = Number("1234");
value = Number("3.14");
value = parseFloat("3.14");
value = parseInt("3");
value = Number(null);
value = Number(undefined);
value = Number("Hello World");
value = Number(function(){console.log()});
value = Number([1,2,3,4,5]);

const a = "hello" + 34;
console.log(a);
console.log(typeof a); // string ve number varsa otomatik olarak stringe çevirir

console.log(value);
console.log(typeof value);