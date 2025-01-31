const searchBtn = document.querySelector(".search-btn")
const runBtn = document.querySelector(".run-btn")
const sideBar = document.querySelector(".side-bar")
const sideBarBtn = document.querySelector(".side-bar-btn")
const sideBarText = document.querySelector(".side-bar-text")
const roots = document.querySelector(".roots")
const body = document.body

searchBtn.addEventListener("click", searchSideBar)
sideBar.addEventListener("click", searchSideBar)
runBtn.addEventListener("click", runSideBar)

function searchSideBar() {
    sideBar.classList.toggle("active")
    sideBarText.innerHTML = "Whoa ! You find me!"
    sideBarBtn.innerHTML = "Hide back"
    roots.classList.toggle("opaque")
    body.classList.toggle("dark")
}

function runSideBar(){
    sideBar.classList.toggle("active")
    sideBarText.innerHTML = "Please don't run!"
    sideBarBtn.innerHTML = "Close"
    roots.classList.toggle("opaque")
    body.classList.toggle("dark")
    
}

document.addEventListener('click', (event) => {
    if (!sideBar.contains(event.target) && event.target !== searchBtn && event.target !== runBtn) {
      sideBar.classList.remove('active');
      roots.classList.remove("opaque")
      body.classList.remove("dark")
    }
  });