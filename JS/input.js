// Lesen der Eingaben.
const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const tagInput = document.querySelector('[data-js="tag"]');
const cardContainer = document.querySelector('[data-js="card-container"]');
const textCounter = document.querySelector('[data-js="textCount"]');
const textCounter2 = document.querySelector('[data-js="textCount2"]');
const maxLength = questionInput.getAttribute("maxlength");
const maxLength2 = answerInput.getAttribute("maxlength");

// Übermitteln der Eingaben

textCounter.innerText = maxLength - questionInput.value.length + " Charachers left";
textCounter2.innerText = maxLength2 - answerInput.value.length + " Charachers left";
questionInput.addEventListener("input", () => {
  textCounter.innerText = maxLength - questionInput.value.length + " Charachers left";
});
answerInput.addEventListener("input", () => {
  textCounter2.innerText = maxLength2 - answerInput.value.length + " Charachers left";
});
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target); //Macht eingegebene Daten zugänglich.
  const data = Object.fromEntries(formData); //Wandelt Daten in ein Objekt um.

  const newCard = {
    question: data.question,
    answer: data.answer,
    tags: data.tags,
  };

  const card = document.createElement("article");
  card.classList.add("card");
  cardContainer.append(card);

  card.innerHTML = `
   <h2 class="card__question" data-js="question"> 
                    ${data.question}
                     </h2>
		<button class="card__button-answer" type="button" data-js="answer-button">
			Show answer
		</button>
                    <p class="card__answer" data-js="answer">
                    ${data.answer}
                    </p>
		<ul class="card__tag-list" data-js="tags">
    <li>
    ${data.tags}
    </li>
    </ul>
		<div class="card__button-bookmark" data-js="bookmark-button-wrapper"></div>
	`;

  form.reset();
  questionInput.focus();
});
