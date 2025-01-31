const box = document.querySelector('#box');

// Variables pour suivre le déplacement
let offsetX = 0;
let offsetY = 0;
let isDragging = false;


card.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - card.getBoundingClientRect().left;
  offsetY = e.clientY - card.getBoundingClientRect().top;
});


document.addEventListener('mousemove', (e) => {
  if (!isDragging) return

  // Calculer la nouvelle position de la carte
  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;
  // Appliquer les nouvelles coordonnées
  card.style.left = `${x}px`;
  card.style.top = `${y}px`;
});


document.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
});