const password = document.getElementById('password');
const confpassword = document.getElementById('confpassword');
const form = document.getElementById('signupform');

form.addEventListener("submit", (event) => {
  if (!password.checkValidity() || !confpassword.checkValidity()) {
    event.preventDefault();
  } else if (password.value !== confpassword.value) {
    event.preventDefault();
    password.setCustomValidity("Passwords must match");
    password.reportValidity();
  }
});

password.addEventListener("input", () => {
  password.setCustomValidity("");

  if (password.value !== confpassword.value) {
    password.setCustomValidity("Passwords must match");
  } else {
    confpassword.setCustomValidity("");
  }
});

confpassword.addEventListener("input", () => {

  confpassword.setCustomValidity("");

  if (password.value !== confpassword.value) {
    confpassword.setCustomValidity("Passwords must match");
  } else {
    password.setCustomValidity("");
  }
});

