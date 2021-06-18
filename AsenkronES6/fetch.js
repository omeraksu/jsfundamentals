function getTextFile() {
  // Text Dosyası
  fetch("example.txt")
    .then(res => res.text())
    .then(yaz => console.log(yaz))
    .catch(err => console.log(err));
}
getTextFile();

function getJsonFile() {
  // json dosyası
  fetch("employees.json")
    .then(res => res.json())
    .then(yaz => console.log(yaz))
    .catch(err => console.error(err));
}
getJsonFile();

function getExternal() {
  // api den çekme
  fetch("https://api.exchangeratesapi.io/latest")
    .then(res => res.json())
    .then(data => console.log(data.rates.TRY))
    .catch(err => console.error(err));
}
getExternal();
