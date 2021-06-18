// Replace
// <h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardBody = document.querySelectorAll(".card-body")[1];
const newTitle = document.createElement("h3");
newTitle.id = "tasks-title";
newTitle.className = "card-title";
newTitle.textContent = "Yepisyeni Todolar";

// Eski Element
const oldElement = document.querySelector("#tasks-title")

cardBody.replaceChild(newTitle, oldElement);

console.log(newTitle);
