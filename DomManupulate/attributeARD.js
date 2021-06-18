const todoInput = document.getElementById("todo");
let element;

element = todoInput;
element = todoInput.classList;
todoInput.classList.add("newClass");
todoInput.classList.add("newClass3");
todoInput.classList.remove("newClass3");
element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","bu ne lan");
todoInput.setAttribute("title","vaaayy");
todoInput.removeAttribute("name");
element = todoInput;
element = todoInput.hasAttribute("name");

console.log(element);