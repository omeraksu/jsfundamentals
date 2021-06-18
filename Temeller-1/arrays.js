let value;

const numbers = [23, 213, 21, 3, 4, 5, 62, 12];
const number2 = new Array(1, 2, 3, 4, 5, 6, 7); // ikisi de aynı
const langs = ["python", "java", "C++", "JavaScript"];
const karisik = ["Selam", 23, null, undefined, 3, 21, "ooo"];

// uzunluk
value = numbers.length;

// index
value = numbers[0];
value = numbers[5];
value = numbers[numbers.length - 1]; // en sonki şeysi

// Her hangi index değerini değiştirme
numbers[1] = 32;
value = numbers;

// index of
value = numbers.indexOf(62);

// sonuna değer ekleme
numbers.push(44);
value = numbers;

// başına değer ekleme
numbers.unshift(34);
value = numbers;

// sonundan değer atma
numbers.pop();
value = numbers;

// başından değer atma
numbers.shift();
value = numbers;

// belirli indexten belirli kısımı atma
numbers.splice(0, 3); // 3'e kadar
value = numbers;

// içeriği ters çevir
numbers.reverse();
value = numbers;

// sıralama
value = numbers.sort(); // ilk rakamlarına göre sıralıyor

value = numbers.sort(function (x, y) {
  // küçükten büyüye sıralama
  return x - y;
});

value = numbers.sort(function (x, y) {
  // büyükten küçüğe sıralama
  return y - x;
});

console.log(value);
