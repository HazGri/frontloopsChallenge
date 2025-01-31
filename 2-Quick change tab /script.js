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
    indexContent.textContent = "Positive content";
  } else if (e.target.innerHTML === "NEGATIVE") {
    indexContent.textContent = "Negative content";
  } else {
    indexContent.textContent = "Neutral content";
  }
}

indexForm.addEventListener("submit", handleIndex);

function handleIndex(e) {
  e.preventDefault();
  const indexValue = parseInt(formValue.value, 10);
  if (indexValue === 1) {
    contentButton.forEach((btn) => btn.classList.remove("activate"));
    indexContent.textContent = "Positive content";
    positiveBtn.classList.add("activate");
  } else if (indexValue === 2) {
    contentButton.forEach((btn) => btn.classList.remove("activate"));
    indexContent.textContent = "Negative content";
    negativeBtn.classList.add("activate");
  } else {
    contentButton.forEach((btn) => btn.classList.remove("activate"));
    indexContent.textContent = "Neutral content";
    neutralBtn.classList.add("activate");
  }
}


