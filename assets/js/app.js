const langBtn = document.querySelector(".lang-btn");
const second_lang = document.querySelector(".second_lang");
langBtn.addEventListener("click", function () {
  second_lang.classList.toggle("d-none");
});
