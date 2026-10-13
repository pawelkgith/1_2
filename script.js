(function () {
  const button = document.getElementById("ex1_button");
  const content = document.getElementById("ex1_content");
  let text = "";
  console.log(button);

  button.addEventListener("click", () => {
    for (let i = 0; i <= 9; i++) {
      text += `${i}, `;
    }
    content.innerHTML = text.toString();
  });

  const input = document.getElementById("ex2_text");
  const outputContainer = document.getElementById("ex2_content");
  input.addEventListener("input", (event) => {
    const text = event.target.value;
    let output;
    if (text.length !== 9) {
      output = "Długość numeru musi być równa 9";
    } else if (/[^\p{L}\p{N}]/u.test(text)) {
      output = "Numer nie może zawierać znaków specjalnych";
    } else if (/\p{L}/u.test(text)) {
      output = "Numer nie może zawierać liter";
    } else if (!/^[0-9]{9}$/.test(text)) {
      output = "Numer musi zawierać wyłącznie cyfry 0–9";
    } else {
      output = "Numer telefonu jest poprawny";
    }
    outputContainer.textContent = output;
  });
})();
