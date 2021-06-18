let value;

const todoList = document.querySelector(".list-group")
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardRow = document.querySelector(".card-row");

// Child Nodes - Text dahil alıyor (boşlukları falan)
value = todoList.childNodes;
value = todoList.childNodes[0];

// Children Properties - Sadece elementleri alıyor
value = todoList.children;
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "bu ne lan";


value = cardRow;
value = cardRow.children;
value = cardRow.children[2].children[1].textContent = "bunu da değiştik";

value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;

value = cardRow;
value = cardRow.parentElement;
value = cardRow.parentElement.parentElement;

// Element kardeşleri
value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling.nextElementSibling;
value = todo.previousElementSibling.previousElementSibling;

console.log(value);