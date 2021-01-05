// to open a modal, I neeed any element with the data-open attribute, which is usually a button. 
// by default a modal will close if we click outside its boundaris or when esc is pressed
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
//a page can have more than one open triggers (elements with the data-open attribute)
// each time a trigger is clicked, the associated modal should become visible with fade-in animation 
// the data-open attribute calue has to match the ID of a modal 
// a page can have more than one modal. All modals will initially be hidden 
for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
s
document.addEventListener("keyup", e => {
  // if we press the ESC button this will close 
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});