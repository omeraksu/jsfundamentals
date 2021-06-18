"use strict";

// let kullanici = {
//   isim: "ömer"
// };
// let yonetci = {isim: "kim lan"}

// function selamVer() {
//     console.log(this.isim)
// }

// kullanici.a = selamVer;
// yonetci.b = selamVer;

// kullanici.a();
// yonetci.b();

let kullanici = {
    isim: "John",
    selamVer: function() { alert(this.isim) }
};
  
(kullanici.selamVer)() // noktalı virgüldenmiş!