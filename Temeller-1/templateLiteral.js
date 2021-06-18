const name = "Ömer Aksu";
const department = "Bilişim";
const salary = 4000;

// eski methot
const birey = "İsim: " + name + "\n" + "Departman: " +  department + "\n" + "Maaş: " + salary;

// ES6 ile gelen standart
const bireysi = `İsim: ${name}\nDepartman: ${department}\nMaaş: ${salary}`;

const html = "<ul>" +
             "<li>" + name + "</li>" +
             "<li>" + department + "</li>" +
             "<li>" + salary + "</li>" +
             "</ul>";

document.body.innerHTML = html;

function a() {
    return "Selam beybi"
};

const newHtml = `<ul>
                    <li>${name}</li>
                    <li>${department}</li>
                    <li>${salary}</li>
                    <li>${10 + 23}</li>
                    <li>${a()}</li>
                </ul>`;
// ${içerisinde bildiğin javascript kodunu yazabilmekteyiz. (react işi yani ;)))}
document.body.innerHTML = newHtml;

console.log(birey);
console.log(bireysi);