let button = document.getElementById("ex1_button");
let content = document.getElementById("ex1_content");
let id = 0;

let numer = document.querySelector("#ex2_text");
let content2 = document.querySelector("#ex2_content");

(function() {
  button.addEventListener("click", () => {
    content.textContent = "";
    for (id = 0; id < 9; id++) {
      content.textContent += id + ", ";
    }
    content.textContent += id;
  })

  numer.addEventListener("input", () => {
    let value = numer.value;

    if (/[a-zA-Z]/.test(value)) {
      content2.textContent = "Numer nie może zawierać liter";
    } else if (/[^0-9]/.test(value)) {
      content2.textContent = "Numer nie może zawierać znaków specjalnych";
    } else if (value.length !== 9) {
      content2.textContent = "Długość numeru musi być równa 9";
    } else {
      content2.textContent = "Numer telefonu jest poprawny";
    }
  });
})();
