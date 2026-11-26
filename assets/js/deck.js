import { hexToString, removeColorClasses } from "./colors.js";
import { showView } from "./index.js?v=carousel-header-reset";
import { openModal } from "./index.js?v=carousel-header-reset";

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
    cardElement.classList.toggle("deck__card_color_white", isFlipped);
  };

  flipButton.addEventListener("click", () => {
    isFlipped = !isFlipped;
    updateDisplay();
  });

  cardElement
    .querySelector(".card__btn_type_delete")
    .addEventListener("click", () => openModal(function () {
      cardElement.remove();
    
    }));

  updateDisplay()
  return cardElement;
}

export function renderCard(card, deckColor) {
  const cardElement = createCardEl(card, deckColor);
  cardList.append(cardElement);
}

export function renderDeckView(deck) {
  const practiceBtn = document.querySelector(".gallery__practice-btn");
  practiceBtn.addEventListener("click", () => {
  window.location.hash = `#carousel/${deck.id}`;
});
  const title = deckView.querySelector(".gallery__title");
  title.textContent = deck.name;
  cardList.replaceChildren();
  deck.cards.forEach((card) => renderCard(card, deck.color));
  showView(deckView, "flex");
}
