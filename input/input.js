const emailInput = document.querySelector(".email-inp");
const errorDiv = document.querySelector(".error");

const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

emailInput.addEventListener("input", () => {
  let value = emailInput.value;
  if (!regex.test(value) || value.length < 0) {
    emailInput.style.border = "#a52a2a 2px solid";
    errorDiv.style.display = "block";
  } else {
    emailInput.style.border = "#008000 2px solid";
    errorDiv.style.display = "none";
  }
});
