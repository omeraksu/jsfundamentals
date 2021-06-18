const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("ömer");
myset.add(true);
myset.add({a:1,b:2});
myset.add([1,2,3]);

const myset2 = new Set([100,2,3.14,"ömer"]);

console.log(myset);
console.log(myset2);

// Size
    console.log(myset.size);

// Delete
    myset.delete("ömer")
    console.log(myset);

// Has Metodu -> değeri sorgulama -> şu değer var mı
    console.log(myset.has("ömer"));
    console.log(myset.has(100));
    console.log(myset.has(213));

// forEach 
    myset.forEach(function(value){
        console.log(value);
    });

// forOf
    for(let value of myset){
        console.log(value);
    }


// Setlerden Array Oluşturma
    const array = Array.from(myset);
    console.log(array);