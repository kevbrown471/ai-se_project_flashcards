import { hexToString, removeColorClasses } from "./colors.js";

export function renderCarouselView(deck) {
  const carousel = document.querySelector("#carousel-view");
  const titleElement = carousel.querySelector(".carousel__title");
  const cardElement = carousel.querySelector(".carousel__card");
  const textElement = carousel.querySelector(".carousel__card-text");
  const leftButton = carousel.querySelector(".carousel__btn_type_left");
  const rightButton = carousel.querySelector(".carousel__btn_type_right");
  const flipButton = carousel.querySelector(".carousel__btn_type_flip");
  const colorName = hexToString(deck.color);
  console.log(deck.color, colorName);
  let currentIndex = 0;
  let isFlipped = false;

  removeColorClasses(cardElement, "card__carousel_color_");
  cardElement.classList.add(`card__carousel_color_${colorName}`);

  function updateDisplay() {
    const currentCard = deck.cards[currentIndex];
    textElement.textContent = isFlipped
      ? currentCard.answer
      : currentCard.question;
    titleElement.textContent = `${deck.name} (card position: ${currentIndex + 1}/${deck.cards.length})`;
    cardElement.classList.toggle("carousel__card_color_white", isFlipped);
    leftButton.disabled = currentIndex === 0;
    rightButton.disabled = currentIndex === deck.cards.length - 1;
    leftButton.classList.toggle("carousel__btn_disabled", leftButton.disabled);
    rightButton.classList.toggle(
      "carousel__btn_disabled",
      rightButton.disabled,
    );
    flipButton.setAttribute(
      "aria-label",
      isFlipped ? "Show question" : "Show answer",
    );
  }

  leftButton.onclick = () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      isFlipped = false;
      updateDisplay();
    }
  };

  rightButton.onclick = () => {
    if (currentIndex < deck.cards.length - 1) {
      currentIndex += 1;
      isFlipped = false;
      updateDisplay();
    }
  };

  flipButton.onclick = () => {
    isFlipped = !isFlipped;
    updateDisplay();
  };

  updateDisplay();
  carousel.hidden = false;
}
