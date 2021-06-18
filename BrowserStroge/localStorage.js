/*localStorage.setItem("hareket", "laaaan");*/
/*localStorage.getItem("hareket");*/

console.log(localStorage.getItem("hareket"));

if (localStorage.getItem("hareket")) {
  console.log("veri var kardeşim");
} else {
  console.log("yok malesef");
}

// Local storage array yazma
const todos = ["todo", "todo2", "todo3"];
localStorage.setItem("todos", JSON.stringify(todos));
const value = JSON.parse(localStorage.getItem("todos"));
console.log(value);

// seç bakem
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
  const value = todoInput.value;
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(value);
  localStorage.setItem("todos", JSON.stringify(todos));
  e.preventDefault();
}
