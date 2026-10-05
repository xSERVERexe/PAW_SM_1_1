let button = document.getElementById("ex1_button");
let content = document.getElementById("ex1_content");
let id = 0;

let numer = document.querySelector("#ex2_text");
let content2 = document.querySelector("#ex2_content");

(function() {
  button.addEventListener("click", () => {
    for (id = 0; id < 9; id++) {
      content.innerHTML += id + ", ";
    }
    content.innerHTML += id;
  })

  numer.addEventListener("input", () => {
    let value = numer.value;

    if (value.length != 9) {
      content2.innerHTML = "Długość numeru musi być równa 9";
    } else if (/[a-zA-Z]/.test(value)) {
      content2.innerHTML = "Numer nie może zawierać liter";
    } else if (/[^0-9]/.test(value)) {
      content2.innerHTML = "Numer nie może zawierać znaków specjalnych";
    } else {
      content2.innerHTML = "Numer telefonu jest poprawny";
    }
  });
})();
