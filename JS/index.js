const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  if (bookmark.value.class === "bookmarks_unclicked") {
    bookmark.value.src = "/icons/lesezeichen-schwarz.png";
    bookmark.value.alt = "You saved this question in your bookmarks";
    bookmark.value.class = "";
    bookmark.value.class = "bookmarks_clicked";
  } else {
    bookmark.value.src = "/icons/lesezeichen-schwarz.png";
    bookmark.value.alt = "Bookmark this question";
    bookmark.value.class = "";
    bookmark.value.class = "bookmarks_unclicked";
  }
});
