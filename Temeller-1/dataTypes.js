// Console
console.log("this is console message");
console.warn("this is console warn message");
console.error("and this is console error message");

// Variables
var variable = 20; // a, 20 değerini tutan değişken

/*
    Değişkenler veriyi tutabildiğimiz en temel birimlerdir.

    var, let ve const ile tanımlanabilir

    Değişken isimlendirmelerinin ingilizce oluşu daha doğru olur be karşim

    Javascripte her kod satırı noktalı virgül ile biter ve kodlar yukarıdan aşağıya sırayla okunur.

    Javascript dinamik tipleme yapar, değişkenin türü(number, string, bool) tanımlama yapıldığında otomatik atanır.

    typeof operatörü ile değşikenin veri tipini öğrenebiliriz. -console.log(typleof a)-
*/

let name = "ömer";
console.log(name);
console.log(typeof name);

// Data Types
name = "ömer"; // String = metin veri tipidir, tırnak("..") içerisine yazılır.

// Number = Sayı, ondalık, rakam veri tipidir.
const b = 20;

// Boolean = true, false değerlerinin saklandığı veri tipdir. Genellikle koşul durumlarında kullanılır.
const reply = true;

// Null = Boş veri kümesidir. Hiç bir şey taşımaz, boşluğu temsil eder.
const empty = null;

// Undifined = Tanımsız değerleri belirtir. Boş değildir, tanımsızdır.
let c;

/*
    Javascript içerisinde primitive ve referance olmak üzere iki tip veri tipi vardır.
*/

// Primitive Data Types
// Primitive(ilkel) veri tipleri tek tip veri saklayan tiplerdir.
// String, numbers, boolean veri tipleri ilkeldir.
// Bellekteki değeri kopyalanır bire bir olarak bir başka değere atanmaz.
var pri = 20;
var pri2 = pri;
console.log(pri, pri2);
pri = 10;
console.log(pri, pri2);

// Referance Data Types
// Referance veri tipleri (array, function, object) bellekte verileri referans gösteren veri tipleridir.
// Bir başka değişkene atandığı durumlarda bellekteki yolu referans gösterilir.
var ref = [1, 2, 3];
var ref2 = ref;
ref.push(4);
console.log(ref2);
// ref2 değişkenini ref değişkenine eşitlediğimizde ref2 değerini ref'den referans aldı.
// Yani bellekteki yeri ref2'e atandı bundan dolayı ref'de olacak değişiklikler ref2'de de olacaktır.

// Variable Identification
var isim = "ömer";
console.log(isim);
isim = "ömer aksu";
console.log(isim);

let isim2 = "ömer";
console.log(isim2);
isim2 = "ömer aksu";
console.log(isim2);

let num, sum;
num = 20;
sum = 30;
console.log(num + sum);

const kimlen = "vayyy";
console.log(kimlen);
// kimlen = "oooo";
// console.log(kimlen); -> hata verir const sabittir.

const sayiler = [1, 2, 3, 4, 5];
console.log(sayiler);
sayiler.push(6);
console.log(sayiler); // sayiler referans tipi olduğundan biz değişkeni değiştirmedik bellek
