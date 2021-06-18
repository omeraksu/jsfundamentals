let value;

const firstName = "Ömer";
const lastName = "Aksu";
const langs = "Java,Python,C++"

value = firstName + lastName;
value = firstName + " " + lastName;

value = "Kübra Güler ";

value += "Tuvuncu"; // value = value + "Tuvuncu";

value = firstName.length;

value = firstName.concat(" ",lastName," ","Vow"); // firstname + " " + ...

value = firstName.toLowerCase(); // küçült
value = firstName.toUpperCase(); // büyült

value = firstName[0];
value = firstName[2];
value = firstName[3];
value = firstName[firstName.length - 1]; // her daim son elemanı alır

// index of
value = firstName.indexOf("Ö");

// Char At 
value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);

// Split - virgüllerle ayrılmış bir şey varsa onları tek tek almak için
value = langs.split(",");

// Replace
value = langs.replace("Python","CSS");

// Includes
value = langs.includes("Java");

console.log(value);