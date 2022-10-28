import { Card } from "./components/Card/Card.js";
console.log("Hallo Welt");
const cardList = document.querySelector('[data-js="card-list"]');
cardList.append(
  Card({
    question: "Testfrage",
    answer: "Testantwort",
    tags: ["HTML", "Flexbox"],
  })
);

cardList.append(
  Card({
    question: "Testfrage 2",
    answer: "Testantwort",
    tags: ["HTML", "Flexbox"],
  })
);
