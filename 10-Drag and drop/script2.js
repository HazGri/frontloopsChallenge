const box = document.getElementById("card")

let offsetX = 100;
let offsetY = 100;
let isDragging = false;
box.addEventListener("mousedown", (e) => {
    isDragging = true
})


box.addEventListener("mousemove", (e)=> {
    if(!isDragging){ 
        return
        box.style.left = `${offsetX}px`
    }
})