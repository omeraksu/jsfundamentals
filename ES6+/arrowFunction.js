const merhaba = () => {
  console.log("naber");
};

merhaba();

//  fonksiyon tek bir işlem yapacaksa bu şekilde tek satır yazım yapılabiliyor

const merhaba = firstName => console.log("merhaba", firstName);
merhaba("ömer");

const merhaba = (firstName, lastName) =>
  console.log("merhaba", firstName, lastName);
merhaba("ömer", "aksu");

// fonksiyon sadece return edecekse return ve süslü parantezlere de gerek yok

const cube = x => x * x * x;

console.log(cube(4));
