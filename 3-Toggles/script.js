const switchBtn = document.querySelectorAll(".circle-switch")
const switchBtnArray = Array.from(switchBtn);

switchBtn.forEach(btn => btn.addEventListener("click",handleBtn))

function handleBtn(e){
    let randomIndex
    const targetIndex = switchBtnArray.findIndex(btn => btn === e.target)

    do{randomIndex = Math.floor(Math.random() * switchBtnArray.length)}
    while(randomIndex === targetIndex)
    
    e.target.classList.toggle("circle-active")
    e.target.parentNode.classList.toggle("background-active")
    switchBtnArray[randomIndex].classList.toggle("circle-active")
    switchBtnArray[randomIndex].parentNode.classList.toggle("background-active")
}

