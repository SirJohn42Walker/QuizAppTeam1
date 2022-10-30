// bookmark functionality

const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  if (bookmark.value.class === "bookmarks_unclicked") {
    bookmark.value.src = "/icons/lesezeichen-schwarz.png";
    bookmark.value.alt = "You saved this question in your bookmarks";
    bookmark.classList = "";
    bookmark.classList = "bookmarks_clicked";
  } else {
    bookmark.value.src = "/icons/lesezeichen-schwarz.png";
    bookmark.value.alt = "Bookmark this question";
    bookmark.classList = "";
    bookmark.classList = "bookmarks_unclicked";
  }
});

//button to show or hide answer functionality

const showAnswerButton = document.querySelector(
  '[data-js="showanswer_button"]'
);
const questionText = document.querySelector('[data-js="question_text"]');

showAnswerButton.addEventListener("click", () => {
  questionText.classList.toggle("hidden");
});
