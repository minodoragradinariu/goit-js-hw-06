// Selectăm formularul
const loginForm = document.querySelector('.login-form');

// Adăugăm un event listener pentru evenimentul 'submit'
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Previne reîncărcarea paginii

  // Colectăm valorile câmpurilor
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  // Verificăm dacă câmpurile sunt goale
  if (!email || !password) {
    alert('Toate câmpurile trebuie completate!'); // Afișăm un alert
    return; // Ieșim din funcție
  }

  // Creăm un obiect cu datele introduse
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData); // Afișăm obiectul în consolă

  // Resetăm formularul
  loginForm.reset();
});

