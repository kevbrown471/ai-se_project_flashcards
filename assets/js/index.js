import { decks, getDeckByID } from "./decks.js";
import { hexToString, removeColorClasses } from "./colors.js";
import { renderCarouselView } from "./carousel.js?v=deck-header-resize";
import { renderDeckView } from "./deck.js?v=deck-header-resize";
import { generateModal } from "./modal.js";

export const openModal = generateModal({
  modalEl: document.querySelector("#confirmation-modal"),
  cancelBtnEl: document.querySelector(".modal__btn_type_cancel"),
  confirmBtnEl: document.querySelector(".modal__btn_type_confirm"),
  visibleClass: "modal_visible",
});

const main = document.querySelector(".page__main-content");
const decksView = document.querySelector("#home");
const deckView = document.querySelector("#deck-view");
const carouselView = document.querySelector("#carousel-view");
const notFoundView = document.querySelector("#not-found");
const deckList = document.querySelector(".gallery__list");
const deckTemplate = document.querySelector("#card-template");
const deckCardList = deckView.querySelector(".gallery__list");
const deckHeader = deckView.querySelector(".gallery__header");
const deckCardRow = deckView.querySelector(".gallery__row");
const newCardButton = deckView.querySelector(
  ".gallery__new-card-btn_location_deck-view",
);

function alignDeckHeader() {
  if (getComputedStyle(deckView).display === "none") {
    return;
  }

  const cards = [...deckCardList.querySelectorAll(".card")];
  const firstCardTop = cards[0]?.getBoundingClientRect().top;
  const firstRowCards = cards.filter(
    (card) => Math.abs(card.getBoundingClientRect().top - firstCardTop) < 1,
  );
  const items = firstRowCards.length ? firstRowCards : [newCardButton];
  const itemRects = items.map((item) => item.getBoundingClientRect());
  const rowLeft = Math.min(...itemRects.map((rect) => rect.left));
  const rowRight = Math.max(...itemRects.map((rect) => rect.right));
  const deckLeft = deckView.getBoundingClientRect().left;

  deckHeader.style.alignSelf = "flex-start";
  deckHeader.style.width = `${rowRight - rowLeft}px`;
  deckHeader.style.marginLeft = `${rowLeft - deckLeft}px`;
}

function scheduleDeckHeaderAlignment() {
  window.requestAnimationFrame(alignDeckHeader);
}

window.addEventListener("resize", scheduleDeckHeaderAlignment);
new ResizeObserver(scheduleDeckHeaderAlignment).observe(deckCardRow);
new MutationObserver(scheduleDeckHeaderAlignment).observe(deckCardList, {
  childList: true,
});

function createDeckEl(card) {
  const deckElement = deckTemplate.content.firstElementChild.cloneNode(true);
  const link = deckElement.querySelector(".card__link");

  link.href = `#deck/${card.id}`;
  link.textContent = card.name;

  const countEl = deckElement.querySelector(".card__count");
  const count = card.cards.length;
  countEl.textContent = `${count} ${count === 1 ? "card" : "cards"}`;

  removeColorClasses(deckElement, "card--color-");
  deckElement.classList.add(`card--color-${hexToString(card.color)}`);

  deckElement
    .querySelector(".card__btn_type_delete")
    .addEventListener("click", () => openModal(function () {
      deckElement.remove();
    
    }));

  return deckElement;
}

function renderDeck(card) {
  const deckEl = createDeckEl(card);
  deckList.prepend(deckEl);
}

decks.forEach(renderDeck);

function renderView() {
  const route = window.location.hash.slice(1);

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
      scheduleDeckHeaderAlignment();
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