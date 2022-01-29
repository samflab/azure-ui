const emailInput = document.querySelector(".email-inp");
const errorDiv = document.querySelector(".error");

const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

const errorIcon = '<i class="fas fa-exclamation-circle"></i>';

const enableError = () => {
  emailInput.style.border = "#a52a2a 2px solid";
  errorDiv.style.display = "block";
};

const disableError = () => {
  emailInput.style.border = "#008000 2px solid";
  errorDiv.style.display = "none";
};
emailInput.addEventListener("input", () => {
  let value = emailInput.value;
  
  if (value.length <= 0) {
    errorDiv.innerHTML = `${errorIcon} This field cannot be empty`;
    enableError();
  } else if (!regex.test(value)) {
    errorDiv.innerHTML = `${errorIcon} Not a valid email address`;
    enableError();
  } else disableError();
});
