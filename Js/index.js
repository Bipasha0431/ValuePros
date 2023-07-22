const eye = document.getElementById("eye");
const eyepass = document.getElementById("eyepass");
const eyeicon = document.getElementById("eyeicon");

const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");
const openlog = document.getElementById("openlog");
const getstarted = document.getElementById("getstarted");
const box = document.getElementById("box");
const account = document.getElementById("acc");
const signup = document.getElementById("signpge");
const close = document.querySelector(".close");
const closee = document.querySelector(".closee");
const login = document.getElementById("Login");
const register_btn = document.querySelector(".register_btn");
const form = document.getElementById("form");
const formsignup = document.getElementById("formsignup");

const app_service = document.getElementById("app_service");
const appBox1 = document.querySelector(".app_box1");
const appBox2 = document.querySelector(".app_box2");

const emailid = document.getElementById("emailid");
const passwordd = document.getElementById("passwordd");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const phone = document.getElementById("phone");
const confirmPass = document.getElementById("confirmPass");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");

const signbtn = document.getElementById("signbtn");

const forgotbtn = document.getElementById("forgotbtn");
const cross = document.querySelector(".cross");

openlog.addEventListener("click", () => {
  document.querySelector(".Loginpge").style.display = "flex";
  box.style.position = "fixed";
  box.style.width = "100%";
});

getstarted.addEventListener("click", () => {
  document.querySelector(".Loginpge").style.display = "flex";
  box.style.position = "fixed";
  box.style.width = "100%";
});

account.addEventListener("click", () => {
  document.querySelector(".Signpge").style.display = "flex";
  box.style.position = "fixed";
  box.style.width = "100%";
});

login.addEventListener("click", () => {
  document.querySelector(".Loginpge").style.display = "flex";

  document.querySelector(".Signpge").style.display = "none";
});

register_btn.addEventListener("click", () => {
  document.querySelector(".Loginpge").style.display = "none";

  document.querySelector(".Signpge").style.display = "flex";
});

forgotbtn.addEventListener("click", () => {
  document.querySelector(".forgot").style.display = "flex";

  document.querySelector(".Loginpge").style.display = "none";
  box.style.position = "fixed";
  box.style.width = "100%";
});

eye.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eye.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    password.type = "password";
    eye.classList.replace("fa-eye", "fa-eye-slash");
  }
};

eyepass.onclick = function () {
  if (passwordd.type == "password") {
    passwordd.type = "text";
    eyepass.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passwordd.type = "password";
    eyepass.classList.replace("fa-eye", "fa-eye-slash");
  }
};
eyeicon.onclick = function () {
  if (confirmPass.type == "password") {
    confirmPass.type = "text";
    eyeicon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    confirmPass.type = "password";
    eyeicon.classList.replace("fa-eye", "fa-eye-slash");
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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const isEmail = (emailval) => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailval.match(mailformat)) {
    return true;
  } else {
    return false;
  }
};

const validateInputs = () => {
  const emailval = email.value.trim();
  const passwordval = password.value.trim();

  if (emailval === "") {
    setError(email, "*Email is required");
  } else if (!isEmail(emailval)) {
    setError(email, "*Email is not valid");
  } else {
    setSuccess(email);
  }

  if (passwordval === "") {
    setError(password, "*Password is required");
  } else if (passwordval.length < 6) {
    setError(password, "*Password must be more than 6 characters");
  } else if (passwordval.length > 9) {
    setError(password, "*Password must be less than 9 characters");
  } else {
    setSuccess(password);
  }
};

function showform(input) {
  if (input.value == "appraisal") {
    appBox2.style.visibility = "visible";
    appBox1.style.display = "none";
    appBox2.style.display = "flex";
  } else if (input.value == "valuation") {
    appBox2.style.display = "none";
    appBox1.style.visibility = "visible";
    appBox1.style.display = "flex";
  }
}

formsignup.addEventListener("submit", (e) => {
  e.preventDefault();
  signupvalidate();
});

const isEmailval = (emailvalue) => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailvalue.match(mailformat)) {
    return true;
  } else {
    return false;
  }
};

const signupvalidate = () => {
  const fnamevalue = fname.value.trim();
  const lnamevalue = lname.value.trim();
  const emailvalue = emailid.value.trim();
  const passwordvalue = passwordd.value.trim();
  const phonevalue = phone.value.trim();
  const confirmPassvalue = confirmPass.value.trim();

  if (fnamevalue === "") {
    setError(fname, "*First name is required");
  } else {
    setSuccess(fname);
  }

  if (lnamevalue === "") {
    setError(lname, "*Last name is required");
  } else {
    setSuccess(lname);
  }

  if (phonevalue === "") {
    setError(phone, "*Phone Number is required");
  } else if (phonevalue.length > 10) {
    setError(phonevalue, "*Phone Number is invalid");
  } else {
    setSuccess(phone);
  }

  if (emailvalue === "") {
    setError(emailid, "*Email is required");
  } else if (!isEmailval(emailvalue)) {
    setError(emailid, "*Email is not valid");
  } else {
    setSuccess(emailid);
  }

  if (passwordvalue === "") {
    setError(passwordd, "*Password is required");
  } else if (passwordvalue.length < 6) {
    setError(passwordd, "*Password must be more than 6 characters");
  } else if (passwordvalue.length > 9) {
    setError(passwordd, "*Password must be less than 9 characters");
  } else {
    setSuccess(passwordd);
  }

  if (confirmPassvalue === "") {
    setError(confirmPass, "*Password is required");
  } else if (passwordvalue != confirmPassvalue) {
    setError(confirmPass, "*Password does not match");
  } else {
    setSuccess(confirmPass);
  }

  if (check1.checked && check2.checked) {
    setSuccess(check2);
  } else {
    setError(check2, "*Tick the required fields");
  }
};
