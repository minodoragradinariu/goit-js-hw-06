// Selectăm lista de categorii
const categoriesList = document.querySelector('#categories');

// Selectăm toate elementele `li` cu clasa `item` (fiecare categorie)
const categoryItems = categoriesList.querySelectorAll('.item');

// Afișăm numărul total de categorii
console.log(`Number of categories: ${categoryItems.length}`);

// Parcurgem fiecare element `li.item` pentru a afișa detaliile fiecărei categorii
categoryItems.forEach((item) => {
  // Găsim titlul categoriei (tag-ul <h2>)
  const categoryTitle = item.querySelector('h2').textContent;

  // Găsim și numărăm elementele din categoria respectivă (tag-urile <li> din sub-lista categoriei)
  const elementsCount = item.querySelectorAll('ul li').length;

  // Afișăm titlul și numărul de elemente din categorie
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
