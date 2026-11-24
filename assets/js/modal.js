
function generateModal(config) {
  return function openModal(onConfirm) {
    config.modalEl.classList.add(config.visibleClass);
   
   config.confirmBtnEl && config.confirmBtnEl.addEventListener("click", function () {
    onConfirm && onConfirm();
    config.modalEl.classList.remove(config.visibleClass);
   }, { once: true });

    config.cancelBtnEl.addEventListener("click", () => {
     config.modalEl.classList.remove(config.visibleClass);
   }, { once: true });

  }
}


export {generateModal}