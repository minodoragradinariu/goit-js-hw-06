// Inițializăm variabila counterValue cu 0
let counterValue = 0;

// Selectăm elementele din DOM
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

// Funcția pentru actualizarea valorii în interfață
function updateValue() {
  valueEl.textContent = counterValue;
}

// Adăugăm event listener pentru decrement
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;  // Scădem valoarea
  updateValue();       // Actualizăm interfața
});

// Adăugăm event listener pentru increment
incrementBtn.addEventListener('click', () => {
  counterValue += 1;  // Mărim valoarea
  updateValue();       // Actualizăm interfața
});
