// Lesen der Eingaben.
const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="input-question"]');
const answerInput = document.querySelector('[data-js="input-answer"]');
const tagInput = document.querySelector('[data-js="input-tag"]');

// Übermitteln der Eingaben
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  questionInput = document.createElement();
  answerInput = document.createElement();
  tCagInput = document.createElement();

  const newCard = document.createElement("li");
  newCard.append();
});
