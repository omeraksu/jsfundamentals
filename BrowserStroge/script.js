const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", todoAdd);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  secondCardBody.addEventListener("click", deleteTodo);
  filter.addEventListener("keyup", filterTodos);
  clearButton.addEventListener("click", clearAllTodos);
}

function addTodoToUI(newTodo) {
  /*
        <li class="list-group-item d-flex justify-content-between">
            Todo 1
            <a href = "#" class ="delete-item">
                <i class = "fa fa-remove"></i>
            </a>
        </li>
  */

  const listItem = document.createElement("li");
  const link = document.createElement("a");

  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = '<i class = "fa fa-remove"></i>';

  listItem.className = "list-group-item d-flex justify-content-between";

  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  todoList.appendChild(listItem);
  todoInput.value = "";
}

function todoAdd() {
  const newTodo = todoInput.value.trim();
  addTodoToUI(newTodo);
  addTodoToStorage(newTodo);
  showAlerts("success", "gonderdik alaysını");
}

function showAlerts(type, message) {
  /*
    <div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
    </div>
  */

  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = `${message}`;
  firstCardBody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 1000);
}

function filterTodos() {}

function clearAllTodos() {}

function deleteTodo() {}

function loadAllTodosToUI() {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}

function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function addTodoToStorage(newTodo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
