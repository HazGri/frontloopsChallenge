const codeNumbers = document.querySelectorAll(".code_number")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const submitBtn = document.getElementById("submit-btn")
const cardNumber = document.querySelector(".card_numbers")

submitBtn.addEventListener("click", ()=>{
    alert(`votre code est ${one.value}${two.value}${three.value}${four.value}${five.value}${six.value}`)
})



codeNumbers.forEach(number => {
    number.addEventListener("click", handleFocus)
})
function handleFocus(){
        if(one.value === ""){
            one.focus()
        }
        else if(two.value ===""){
            two.focus()
        }
        else if(three.value ===""){
            three.focus()
        }
        else if(four.value ===""){
            four.focus()
        }
        else if(five.value ===""){
            five.focus()
        }
        else if(six.value === ""){
        six.focus()  
    }
}
codeNumbers.forEach(number => {
    number.addEventListener("input", ()=> {
        if(number.value !== ""){
            handleFocus()
        }
    })
})

codeNumbers.forEach(number => {
    number.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && input.value === "" && index > 0) {
        // Retourner à l'input précédent
        inputs[index - 1].focus();
    }})
});



codeNumbers.forEach(number => {
    number.addEventListener("input", ()=>{
        number.value = number.value.slice(0,1)
    })
})

