import { decks, getDeckByID } from "./decks.js";
import { hexToString, removeColorClasses } from "./colors.js";
import { renderCarouselView } from "./carousel.js";

const main = document.querySelector(".page__main-content");
const decksView = document.querySelector("#home");
const carouselView = document.querySelector("#carousel-view");
const notFoundView = document.querySelector("#not-found");
const deckList = document.querySelector(".decks__list");
const deckTemplate = document.querySelector("#deck-template");

function createDeckEl(deck) {
  const deckElement = deckTemplate.content.firstElementChild.cloneNode(true);
  const link = deckElement.querySelector(".deck__link");

  link.href = `#carousel/${deck.id}`;
  link.textContent = deck.name;
  deckElement.querySelector(".deck__count").textContent =
    `${deck.cards.length} cards`;
  removeColorClasses(deckElement, "deck--color-");
  deckElement.classList.add(`deck--color-${hexToString(deck.color)}`);

  deckElement
    .querySelector(".deck__delete-btn")
    .addEventListener("click", () => {
      deckElement.remove();
    });

  return deckElement;
}

function renderDeck(deck) {
  const deckEl = createDeckEl(deck);
  deckList.prepend(deckEl);
}

decks.forEach(renderDeck);

function renderView() {
  const route = window.location.hash.slice(1);

  decksView.hidden = true;
  carouselView.hidden = true;
  notFoundView.hidden = true;
  main.classList.remove("page__main-content_location_carousel");

  if (!route || route === "home") {
    decksView.hidden = false;
    return;
  }

  const [view, deckId] = route.split("/");
  if (view === "carousel" && deckId) {
    const deck = getDeckByID(deckId);
    if (deck) {
      main.classList.add("page__main-content_location_carousel");
      renderCarouselView(deck);
      return;
    }
  }

  notFoundView.hidden = false;
}

window.addEventListener("hashchange", renderView);
renderView();
