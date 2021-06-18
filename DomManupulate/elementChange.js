const element = document.querySelector("#clear-todos");

console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);

// Style and Element Properties Changes
element.className = "btn btn-primary";
element.style.color = "white";
element.style.marginLeft = "60px";
element.href = "https://www.google.com";
element.target = "_blank";
element.textContent = "sil beaa";
element.innerHTML = "<span style='color: green'>sil gide</span>";

const elements = document.querySelectorAll(".list-group-item");
elements.forEach(function(el){
    el.style.color = "red";
    el.style.background = "#ececec";
});

let element2  = document.querySelector('li:last-child');
element2  = document.querySelector('li:nth-child(2)');
element2  = document.querySelectorAll('li:nth-child(odd)'); // Tek sayıları seçer
element2  = document.querySelectorAll('li:nth-child(even)'); // Çift sayıları seçer

element2.forEach(function(el){
    el.style.background = "#ccc";
    el.style.color = "#eee"
});

console.log(element2);