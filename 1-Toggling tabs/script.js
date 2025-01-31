const myBtn = document.querySelectorAll(".btn");

// myBtn.forEach(btn => btn.addEventListener("click", handleBtn))

// function handleBtn(e){
//     myBtn.forEach(btn => btn.classList.remove("activate"))
//     e.target.classList.add("activate")
// }

// myBtn.addEventListener("click", (e) => {
//     myBtn.forEach(btn => btn.classList.remove("activate"))
//     e.target.classList.add("activate")
//     });

myBtn.forEach((btn) => btn.addEventListener("click", (e) => {
myBtn.forEach((btn) => btn.classList.remove("activate"));
e.target.classList.add("activate");
})
);