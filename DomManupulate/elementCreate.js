// element oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";
// newLink.textContent = "Şimdi yapmasan da olur"; // güvenli değil ( içindeki her şeyi siler ve texti ekler)
newLink.appendChild(document.createTextNode("Farklı Sayfaya Git")) // güvenli olan

cardBody.appendChild(newLink);

console.log(newLink);