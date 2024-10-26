// Funcția pentru generarea unei culori hex aleatoare
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Funcția pentru crearea cutiilor
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  
  // Creăm elementele <div>
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10; // Dimensiunea crește cu 10px pentru fiecare box
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  // Adăugăm cutiile la container
  boxesContainer.append(...boxes);
}

// Funcția pentru distrugerea cutiilor
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Ștergem conținutul div#boxes
}

// Selectăm butoanele și input-ul
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');

// Adăugăm event listener pentru butonul de creare
createButton.addEventListener('click', () => {
  const amount = Number(input.value); // Preluăm valoarea din input
  if (amount > 0) {
    createBoxes(amount); // Creăm cutiile
  }
});

// Adăugăm event listener pentru butonul de distrugere
destroyButton.addEventListener('click', () => {
  destroyBoxes(); // Distrugem cutiile
});
