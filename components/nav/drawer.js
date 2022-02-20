const hamburger = document.querySelector(".hamburger");
const drawer = document.querySelector(".sidenav");
const close = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  drawer.style.width = "250px";
});

close.addEventListener("click", () => {
  drawer.style.width = "0px";
});
