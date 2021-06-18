function selam(name = "burası boş", age = "bura da boş") {
    
    // if (name === "undefined") name = "bomboş"
    console.log(`İsim: ${name}\n Yaş: ${age}`);
}
selam("ömer",23); // function call

/* 
    fonksiyon içerisinden değer dönmek için return kullanılır, 
    fonksiyon bittiğinde return sayesinde değeri çağırdığımız yere gönderebiliyoruz
    return altındaki kod bloğu biter o yüzden return en son olsa iyi olur.
*/

function oooo(x,y) {
    return x * y;
}
function laaa(x) {
    return x*x;
}
let a = laaa(oooo(21,32));
console.log(a);

function merhaba(){
    return "selam";
}
console.log(merhaba());

// Function Expression
const oookardis = function(senkim){
    console.log("selam \n" + senkim);
}
oookardis("bu ne lan");

// immediately invoked funciton expression (IIFE) - tanımlandığı yerde çalışan faksiyon
(function(isim) {
    console.log("merhaba " + isim);
})("ömer");

const database = {
    host: "localhost",
    add: function(){
        console.log("eklendi");
    },
    get: function(){
        console.log("elde etttin mi?");
    },
    update: function(id){
        console.log(`${id} güncellendi`);
    },
    delete: function(id){
        console.log(`${id} silindi`);
    }
}

console.log(database.host);
database.update(23);
database.add();