// element silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item")

// remove & removeChild

todos[3].remove();
todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[2]);

console.log(todos);
console.log(todoList);