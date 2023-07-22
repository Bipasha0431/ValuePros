const oldpass = document.getElementById("oldpass");
const change_pass = document.getElementById("change_pass");
const newpass = document.getElementById("newpass");
const confirmpass = document.getElementById("confirmpass");

eye1.onclick = function () {
  if (oldpass.type == "password") {
    oldpass.type = "text";
    eye1.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    oldpass.type = "password";
    eye1.classList.replace("fa-eye", "fa-eye-slash");
  }
};

eye2.onclick = function () {
  if (newpass.type == "password") {
    newpass.type = "text";
    eye2.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    newpass.type = "password";
    eye2.classList.replace("fa-eye", "fa-eye-slash");
  }
};

eye3.onclick = function () {
  if (confirmpass.type == "password") {
    confirmpass.type = "text";
    eye3.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    confirmpass.type = "password";
    eye3.classList.replace("fa-eye", "fa-eye-slash");
  }
};
function setError(input, errormsg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.classList.add("error");
  small.innerText = errormsg;
}

function setSuccess(input, errormsg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.classList.remove("error");
  small.innerText = "";
}

change_pass.addEventListener("submit", (e) => {
  e.preventDefault();
  changeformvalidate();
});

const changeformvalidate = () => {
  const oldpassval = oldpass.value.trim();
  const newpassval = newpass.value.trim();
  const confirmpassval = confirmpass.value.trim();

  if (oldpassval === "") {
    setError(oldpass, "*Password is required");
  } else {
    setSuccess(oldpass);
  }
  if (newpassval === "") {
    setError(newpass, "*Password is required");
  } else if (newpassval.length < 6) {
    setError(newpass, "*Password must be more than 6 characters");
  } else if (newpassval.length > 9) {
    setError(newpass, "*Password must be less than 9 characters");
  } else {
    setSuccess(newpass);
  }

  if (confirmpassval === "") {
    setError(confirmpass, "*Password is required");
  } else if (newpassval != confirmpassval) {
    setError(confirmpass, "*Password does not match");
  } else {
    setSuccess(confirmpass);
  }
};
