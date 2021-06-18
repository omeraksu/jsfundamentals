/*
    Promise yapılarında istek cevap döngüsü 3 aşamalı çalışıyor.
    Promise de kendi içerisinde bir obje olduğundan içerisinde belli başlı methotlar barındırıyor.

    İlk aşama isteği attığımız adım. Bu adımda -Panding-  durumunda oluyoruz
    Pending durumuna geçen promise objesinin state: pending'e, value: undifiend oluyor

    İkinci aşamada isteğimizin cevabı olumlu olması durumu
    Resolve durumuna geçen promise objesinin state: resolve, value: deger, oluyor

    Üçüncü aşama ise isteğimizin cevabının olumsuz olması durumu
    Reject durumuna geçene promise objesinin state: reject, value: error oluyor

    Bu üç durumu isteğimizi yaptığımız blokta yakalabilmek için
    isteğimizin sonunda 
    .then() -> içerisinde olumlu dönen sonucu
    .catch() -> içerisinde olumsuz dönmesi durumunu yakalayabiliriz. -sadece 1 kere kullanılır-
*/

function getData(data) {
  // promise objesi döndüren func
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "string") {
        resolve(data);
      } else {
        reject("Hata oldu");
      }
    }, 2000);
  });
}

getData("naber")
  .then(res => console.log("Gelen değer: " + res))
  .catch(err => console.error(err));

function addTwo(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        resolve(number + 2);
      } else {
        reject(new Error("Sayı girer misin karşim"));
      }
    }, 3000);
  });
}

addTwo("naber")
  .then(res => {
    console.log(res);
    return res + 2;
  })
  .then(res2 => console.log(res2))
  .catch(err => console.error(err));
// bir tane catch birden çok then yapabiliriz. ona da promise chain deniyor.