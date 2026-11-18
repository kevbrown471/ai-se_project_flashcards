import { hexToString, removeColorClasses } from "./colors.js";

const deckView = document.querySelector("#deck-view");
const cardList = deckView.querySelector(".gallery__list");
const cardTemplate = deckView.querySelector("#flashcard-template");

export function createCardEl(card, deckColor) {
  const cardElement = cardTemplate.content.firstElementChild.cloneNode(true);
  const title = cardElement.querySelector(".card__title");
  const flipButton = cardElement.querySelector(".card__flip-btn");
  let isFlipped = false;

  removeColorClasses(cardElement, "card--color-");
  cardElement.classList.add(`card--color-${hexToString(deckColor)}`);

  const updateDisplay = () => {
    title.textContent = isFlipped ? card.answer : card.question;
    title.title = title.textContent;
  };

  flipButton.addEventListener("click", () => {
    isFlipped = !isFlipped;
    updateDisplay();
  });

  cardElement
    .querySelector(".card__delete-btn")
    .addEventListener("click", () => {
      cardElement.remove();
    });

  updateDisplay();
  return cardElement;
}

export function renderCard(card, deckColor) {
  const cardElement = createCardEl(card, deckColor);
  cardList.append(cardElement);
}

export function renderDeckView(deck) {
  const practiceLink = document.querySelector(".gallery__practice-link");
  practiceLink.href = `#carousel/${deck.id}`;
  const title = deckView.querySelector(".gallery__title");
  title.textContent = deck.name;
  cardList.replaceChildren();
  deck.cards.forEach((card) => renderCard(card, deck.color));
  deckView.hidden = false;
}
