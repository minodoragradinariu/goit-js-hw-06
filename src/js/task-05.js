// Selectăm elementele din DOM
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Adăugăm un event listener pentru evenimentul 'input'
nameInput.addEventListener('input', event => {
  // Verificăm dacă input-ul este gol
  if (event.target.value === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    // Actualizăm conținutul lui <span> cu valoarea introdusă
    nameOutput.textContent = event.target.value;
  }
});
