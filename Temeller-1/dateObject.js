let value;

const now = new Date(); // şu anki zamanı alır
const date1 = new Date("8-9-1996 03:24:21"); // istediğimiz tarihi şey etmelik
const date2 = new Date("July 9 1996");
const date3 = new Date("8/9/1996");

// aylar 0 dan başlıyor 

value = date1;
value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();
value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

value = date1;
date1.setMonth(3);
date1.setDate(23);
date1.setFullYear(1942);
date1.setHours(11);
date1.setMinutes(23);
date1.setSeconds(34);

console.log(value); // get getiriyor set değiştiriyor