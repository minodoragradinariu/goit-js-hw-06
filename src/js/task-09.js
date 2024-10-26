function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Selectăm butonul și span-ul din DOM
const changeColorButton = document.querySelector('.change-color');
const colorDisplay = document.querySelector('.color');

// Adăugăm un event listener pentru buton
changeColorButton.addEventListener('click', () => {
  // Generăm o culoare aleatoare
  const randomColor = getRandomHexColor();
  
  // Schimbăm culoarea de fundal a body-ului
  document.body.style.backgroundColor = randomColor;
  
  // Afișăm culoarea generată în span
  colorDisplay.textContent = randomColor;
});