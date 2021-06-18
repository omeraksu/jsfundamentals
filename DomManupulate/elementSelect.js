let element;

// ID'e göre seçme
element = document.getElementById('todo-form');
element = document.getElementById('tasks-title');

// Class'a göre seçme
element = document.getElementsByClassName('list-group-item');
element = document.getElementsByClassName('card-header');

// Element Tag'e göre
element = document.getElementsByTagName('li');

// Query selector - CSS Selector - İlk bulduğu elementi tek olarak döner
element = document.querySelector("#tasks-title"); // id'e göre
element = document.querySelector(".list-group-item"); // Class'a göre
element = document.querySelector('li'); // Tag name e göre

element = document.querySelectorAll('div');
element.forEach(function(el){
    console.log(el);
});

console.log(element);