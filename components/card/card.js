const closeBtn = document.querySelector(".close-btn");
const card = document.querySelector(".card");

closeBtn.addEventListener("click", () => {
  card.style.display = "none";
});
