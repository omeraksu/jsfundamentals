let value;

const value1 = 10;
const value2 = 4;

// Aritmatik Operatörler
value = value1 + value2;
value = value1 - value2;
value = value1 * value2;
value = value1 / value2;
value = value1 % value2;
value = value1++
value = ++value1;
value = --value1;
value = value1--;


// Math Objesi
value = Math.PI;
value = Math.E;

value = Math.round(3.6);
value = Math.round(3.5);
value = Math.round(3.4); // yuvarlar

value = Math.ceil(3.1); // yukarı yuvarlar

value = Math.floor(3.9); // aşağı yuvarlar

value = Math.sqrt(28); // karekök alma

value = Math.abs(-23); // mutlak değer alma

value = Math.pow(8,3); // kuvvet alma
value = Math.pow(4,2); // kuvvet alma

value = Math.max(10,-1,22,32); // en büyük sayıyı gönderir
value = Math.min(10,-1,22,32); // en küçük sayıyı gönderir

value = Math.random(); // 0 ile 1 arası rasgele sayı üretir 
value = Math.random() * 20; // 0 ile 20 arası rasgele sayı üretir (0 dahil 20 dahil değil)
value = Math.random() * 20 + 1; // 1 ile 21 arası rasgele sayı üretir (0 dahil 20 dahil değil)
value = Math.floor(Math.random() * 20 + 1); // 1 ile 21 arası rasgele tam sayı üretir (1 dahil 21 dahil değil)





console.log(value);