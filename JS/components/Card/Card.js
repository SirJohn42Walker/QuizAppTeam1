export function Card(cardData) {
  const card = document.createElement("div");
  card.classList.add("third");
  //Klasse neu benennen.
  card.innerHTML = `
        <p class="Bookmarks">😀</p>
        <p>
          ${cardData.question}
        </p>
        <button class="Showanswer">Show Answer</button>
        <button class="Categories" id="Button_Option3">
          #HTML <button class="Categories">#Flexbox</button
          ><button class="Categories">#CSS</button>
        </button>
      `;
  return card;
}
