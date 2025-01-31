const submitTitleBtn = document.querySelector(".container-content__submit-title-btn");
const textContent = document.querySelector(".container-content__text");
const firstContent = document.querySelector(".container-title-selection__one");
const secondContent = document.querySelector(".container-title-selection__two");
const thirdContent = document.querySelector(".container-title-selection__three");
const secondNumber = document.querySelector(".container-numbers__two");
const thirdNumber = document.querySelector(".container-numbers__three");
const backBtn = document.querySelector(".container-content__back-btn");
const submitDescriptionBtn = document.querySelector(".container-content__submit-description-btn");
const goBackBtn = document.querySelector(".container-content__go-back-btn");
const goAheadBtn = document.querySelector(".container-content__go-ahead-btn");
const allBtns = document.querySelectorAll(".container-content__btn");

const btnsForSecondPage = [submitTitleBtn, secondContent, goBackBtn];
const btnsForThirdPage = [submitDescriptionBtn,thirdContent]
const btnsForPreviousPage = [backBtn, firstContent, submitDescriptionBtn]
const goBtns = [goAheadBtn,goBackBtn]

btnsForSecondPage.forEach(el => el.addEventListener("click", showSecondContent));
btnsForThirdPage.forEach(el => el.addEventListener("click", showLastContent))
btnsForPreviousPage.forEach(el => el.addEventListener("click", previousContent))
goAheadBtn.addEventListener("click", showEnd);

function showSecondContent() {
  allBtns.forEach((btn) => {
    btn.classList.remove("show-content");
  });
  thirdContent.classList.remove("text-active");
  thirdNumber.classList.remove("number-active");
  textContent.innerHTML = "Chose description content";
  secondContent.classList.add("text-active");
  secondNumber.classList.add("number-active");
  submitTitleBtn.classList.add("hide-content");
  btnsForPreviousPage.forEach(el => el.classList.add("show-content"));
}

function previousContent() {
  if (!thirdContent.classList.contains("text-active")) {
    btnsForPreviousPage.forEach(el => el.classList.remove("show-content"))
    submitTitleBtn.classList.remove("hide-content");
    textContent.innerHTML = "Chose title content";
    secondContent.classList.remove("text-active");
    secondNumber.classList.remove("number-active");
  }
}

function showLastContent() {
  if (secondContent.classList.contains("text-active")) {
    textContent.innerHTML = "Are you happy now?";
    thirdContent.classList.add("text-active");
    thirdNumber.classList.add("number-active");
    btnsForPreviousPage.forEach(el => el.classList.remove("show-content"))
    goBtns.forEach(el => el.classList.add("show-content"))
  }
}
function showEnd() {
  allBtns.forEach((btn) => {
    btn.classList.remove("show-content");
  });
  textContent.innerHTML = "OK! We're done! thank you for sending us your data!";
}
