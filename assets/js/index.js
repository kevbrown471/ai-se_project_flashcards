import { decks, getDeckByID } from "./decks.js";
import { hexToString, removeColorClasses } from "./colors.js";
import { renderCarouselView } from "./carousel.js";
import { renderDeckView } from "./deck.js";

const main = document.querySelector(".page__main-content");
const decksView = document.querySelector("#home");
const deckView = document.querySelector("#deck-view");
const carouselView = document.querySelector("#carousel-view");
const notFoundView = document.querySelector("#not-found");
const deckList = document.querySelector(".gallery__list");
const deckTemplate = document.querySelector("#card-template");

function createDeckEl(card) {
  const deckElement = deckTemplate.content.firstElementChild.cloneNode(true);
  const link = deckElement.querySelector(".card__link");

  link.href = `#deck/${card.id}`;
  link.textContent = card.name;
  deckElement.querySelector(".card__count").textContent =
    `${card.cards.length} cards`;
  removeColorClasses(deckElement, "card--color-");
  deckElement.classList.add(`card--color-${hexToString(card.color)}`);

  deckElement
    .querySelector(".card__btn_type_delete")
    .addEventListener("click", () => {
      deckElement.remove();
    });

  return deckElement;
}

function renderDeck(card) {
  const deckEl = createDeckEl(card);
  deckList.prepend(deckEl);
}

decks.forEach(renderDeck);

function renderView() {
  const route = window.location.hash.slice(1);
  console.log("route:", route);

  main.classList.remove("page__main-content_location_carousel");

  if (!route || route === "home") {
    showView(decksView, "flex");
    return;
  }

  const [view, deckId] = route.split("/");
  if (view === "deck" && deckId) {
    const deck = getDeckByID(deckId);
    if (deck) {
      renderDeckView(deck);
      return;
    }
  }

  if (view === "carousel" && deckId) {
    const deck = getDeckByID(deckId);
    if (deck) {
      main.classList.add("page__main-content_location_carousel");
      renderCarouselView(deck);
      return;
    }
  }

  showView(notFoundView, "block");
}

window.addEventListener("hashchange", renderView);
renderView();


export function showView(currentSection, display) {
  const sections = [decksView, deckView, carouselView, notFoundView];

  sections.forEach((section) => {
    section.style.display = "none";
  });
  currentSection.style.display = display;
}