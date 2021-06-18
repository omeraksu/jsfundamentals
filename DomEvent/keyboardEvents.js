// keypress

document.addEventListener("keypress", run);
function run(e) {
  console.log(e.key);
  // console.log(e.which); // ascii tablosu kullanımı
}

// keydown

document.addEventListener("keydown", run);
function run(e) {
  console.log(e.key);
}

// keyup

document.addEventListener("keyup", run);
function run(e) {
  console.log(e.key);
}

// Anlık veri değiştirme
const header = document.querySelector("#bitti");
const input = document.querySelector("#todo");
input.addEventListener("keyup", function(e){
    header.style.color = "#161616";
    header.style.fontSize = "42px";
    header.textContent = e.target.value;
});
