// Event Bubbling

document.querySelector(".container").addEventListener("click", function() {
  console.log("div container");
});
document.querySelector(".card.row").addEventListener("click", function() {
  console.log("div row");
});
document
  .querySelectorAll(".card-body")[1]
  .addEventListener("click", function() {
    console.log("div body");
  });

// Event Capturing || Delagation

const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click", run);

function run(e) {
  if (e.target.className === "fa fa-remove") {
    console.log("sildik");
  }
  if (e.target.id === "filter") {
    console.log("filtreleme yapıldı");
  }
  if (e.target.id === "clear-todos") {
    console.log("alayı temizlendi");
  }
}
