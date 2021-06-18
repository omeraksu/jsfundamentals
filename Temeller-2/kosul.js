// Kosul durumları

/* 
    İf koşul blocklarının çalışması için koşul sonucunun true olması gerekir. Koşul true ise blok çalışır.
*/

const error = false;
if (error == true){
    console.log("wwaayyy");
} else {
    console.log("lan bu ne lan");
}

const user = "omer";
if (user === "omer") {
    console.log("babam hoş geldin");
} else {
    console.log("sen kimsin lan");
}

const process = "4"
if(process === "1"){
    console.log("işlemin bir kardiş")
} else if (process === "2") {
    console.log("işlemin 2 kardiş")
} else if (process === "3") {
    console.log("işlemin 3 kardiş")
} else {
    console.log("işlemin yok kardiş")
}

// Ternary operatör -> tekli if else bloklarında yapılır gayet rahat
const amq = false;
console.log(amq ? "laaaan" : "amq sizin");

const numbers = 102;
console.log(numbers === 100 ? "sayi 100" : "sayi 100 değil");

// if bloğu sadece tek bir işlem barındırıyorsa;
if(numbers == 100) console.log("sayi 100");
else console.log("sayi 100 mü aq")

// Switch-Case -> çoklu sorgulama durumlarında daha elverişli denebilir.

const processing = 2;
switch (processing) {
    case 1:
        console.log("ilki geldi");
        break; // break olayı bu bloğu bitiyor. Kullanmaz isek altındaki case'leri de yapıyor. İşlemden çıkması için break gerekiyor
    case 2:
        console.log("ikinci");
        break;
    case 3:
        console.log("bu ne lan");
        break;
    default:
        console.log("hiç biri gelmedi");
}