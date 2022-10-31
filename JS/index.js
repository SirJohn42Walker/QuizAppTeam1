// bookmark functionality

const bookmark = document.querySelector('[data-js="bookmark"]');
console.log(bookmark.classList);

bookmark.addEventListener("click", () => {
  if (bookmark.classList.contains("bookmarks_unclicked")) {
    bookmark.src = "./icons/lesezeichen-schwarze-form.png";
    bookmark.alt = "You saved this question in your bookmarks";
    bookmark.classList.remove("bookmarks_unclicked");
    bookmark.classList.add("bookmarks_clicked");
    console.log("test");
  } else {
    bookmark.src = "./icons/lesezeichen-weiss.png";
    bookmark.alt = "Bookmark this question";
    bookmark.classList.remove("bookmarks_clicked");
    bookmark.classList.add("bookmarks_unclicked");
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
