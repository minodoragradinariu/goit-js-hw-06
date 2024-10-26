// Selectăm elementele input și span din DOM
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// Setăm dimensiunea textului inițială bazată pe valoarea implicită a input-ului
text.style.fontSize = `${fontSizeControl.value}px`;

// Adăugăm un event listener pentru evenimentul 'input'
fontSizeControl.addEventListener('input', () => {
  // Actualizăm dimensiunea fontului în funcție de valoarea curentă a input-ului
  text.style.fontSize = `${fontSizeControl.value}px`;
});
