const contentButton = document.querySelectorAll(".button-content");
const indexContent = document.querySelector(".index-description");
const positiveBtn = document.querySelector(".positive");
const negativeBtn = document.querySelector(".negative");
const neutralBtn = document.querySelector(".neutral");

const indexForm = document.querySelector(".myForm");
const formValue = document.getElementById("index-value");

contentButton.forEach((btn) => btn.addEventListener("click", handleButton));

function handleButton(e) {
  contentButton.forEach((btn) => btn.classList.remove("activate"));
  e.target.classList.add("activate");
  if (e.target.innerHTML === "POSITIVE") {
    nameBtn("Positive")
  } else if (e.target.innerHTML === "NEGATIVE") {
    nameBtn("Negative")
  } else {
    nameBtn("Neutral")
  }
}

indexForm.addEventListener("submit", handleIndex);

function handleIndex(e) {
  e.preventDefault();
  const indexValue = parseInt(formValue.value, 10);
    if (indexValue <= 3 && indexValue >= 1) {
        if (indexValue === 1) {
            active(positiveBtn, "Positive");
          } else if (indexValue === 2) {
            active(negativeBtn, "Negative");
          } else if (indexValue === 3) {
            active(neutralBtn, "Neutral");
          }
    } else {
      alert("Please enter a number between 1 and 3");
    }
}

function active(arg, state) {
  contentButton.forEach((btn) => btn.classList.remove("activate"));
  arg.classList.add("activate");
  indexContent.textContent = `${state} content`;
}

function nameBtn(state) {
  indexContent.textContent = `${state} content`;
}
