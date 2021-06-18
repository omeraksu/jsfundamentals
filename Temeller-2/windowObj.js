// Window objesi js'nin en genel objesidir. Tüm objeler onun altındadır.

// alert("selam")

// const cevap = prompt("2 + 2");

// if(confirm("emin misin?")){
//     console.log("sil gide");
// } else {
//     console.log("dur bi be");
// }

// console.log(cevap);
// if(cevap == "4"){
//     console.log("güzel iş");
// } else {
//     console.log("bilemedin be kardiş");
// }

let value;

value = window;

console.log(value.location.href);

// if (confirm("yenileyek mi?")){
//     window.location.reload();
// } else {
//     console.log("yenilenmedim");
// }

value = window.outerHeight;
value = window.outerWidth;

value = window.innerHeight;
value = window.innerWidth;
value = window.scrollX;
value = window.scrollY;


console.log(value);
