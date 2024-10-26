const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Selectăm elementul <ul> cu id-ul "ingredients"
const ingredientsList = document.querySelector('#ingredients');

// Creăm un array de elemente <li> pe baza fiecărui ingredient
const items = ingredients.map(ingredient => {
  // Creăm un element <li>
  const li = document.createElement('li');

  // Adăugăm textul și clasa "item" la <li>
  li.textContent = ingredient;
  li.classList.add('item');

  // Returnăm elementul <li> pentru a-l stoca în array-ul `items`
  return li;
});

// Inserăm toate elementele <li> în <ul> într-o singură operațiune
ingredientsList.append(...items);