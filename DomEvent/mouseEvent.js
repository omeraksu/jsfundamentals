const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

// click event
title.addEventListener("click", run);
title.addEventListener("dblclick", run);
title.addEventListener("mousedown", run);
title.addEventListener("mouseup", run);
title.addEventListener("mouseover", run);
title.addEventListener("mouseout", run);
cardBody.addEventListener("mouseenter", run);
cardBody.addEventListener("mouseleave", run);

function run(e) {
  console.log(e.type);
}
