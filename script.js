let button = document.getElementById("ex1_button");
let content = document.getElementById("ex1_content");
let id = 0;

(function() {
  button.addEventListener("click", () => {
    for (id = 0; id < 9; id++) {
      content.innerHTML += id + ", ";
    }
    content.innerHTML += id;
  })
})();
