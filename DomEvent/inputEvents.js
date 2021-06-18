const filterInput = document.querySelector("#filter");

document.addEventListener('DOMContentLoaded',load);

function load(e){
    console.log();
}

filterInput.addEventListener('focus', run);
filterInput.addEventListener('blur', run);
filterInput.addEventListener('paste', run);
filterInput.addEventListener('copy', run);
filterInput.addEventListener('cut', run);
filterInput.addEventListener('select', run);

function run(e){
    console.log(e.type);
}
