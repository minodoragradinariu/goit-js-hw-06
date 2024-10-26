// Selectăm elementul input
const validationInput = document.querySelector('#validation-input');

// Adăugăm un event listener pentru evenimentul 'blur'
validationInput.addEventListener('blur', () => {
  // Preluăm lungimea necesară din atributul data-length și o convertim la număr
  const requiredLength = Number(validationInput.dataset.length);
  // Verificăm dacă lungimea textului introdus corespunde cu cea necesară
  if (validationInput.value.length === requiredLength) {
    // Adăugăm clasa valid și eliminăm clasa invalid, dacă este cazul
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    // Adăugăm clasa invalid și eliminăm clasa valid, dacă este cazul
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
