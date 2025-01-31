const box = document.querySelector('.box');

document.addEventListener('mousemove', (event) => {
    const boxRect = box.getBoundingClientRect(); // Position et dimensions du carré

    // Calculer le centre du carré
    const centerX = boxRect.left + boxRect.width / 2;
    const centerY = boxRect.top + boxRect.height / 2;

    // Distance entre la souris et le centre
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    // Ajuster les angles de rotation
    const rotateX = -mouseY / 30; // Diviser pour réduire l'effet
    const rotateY = mouseX / 30;

    // Appliquer la transformation
    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
