const password = document.getElementById("password");
const confirm_pass = document.getElementById("confirm_password");
const error = document.getElementById("error");
const submit = document.getElementsByClassName("submit-button")[0];

submit.onclick = (e) => {
  e.preventDefault();
  console.log(password);
  console.log(confirm_pass);

  if (password.value !== confirm_pass.value) {
    error.innerHTML = "*Passwords do not match!";
    password.style.borderColor = "red";
    confirm_pass.style.borderColor = "red";
  } else {
    error.innerHTML = "";
    password.style.borderColor = "greenyellow";
    confirm_pass.style.borderColor = "greenyellow";
  }
};
