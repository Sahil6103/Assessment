let register = document.querySelector("#register-btn");
let error = document.querySelector(".error");

// click event of registration button
register.addEventListener("click", (e) => {
  if (
    checkEmail() == false ||
    checkPassword() == false ||
    checkReTypePassword() == false ||
    checkFirstName() == false ||
    checkLastName() == false ||
    checkGender() == false ||
    selectCountry() == false ||
    checkCheckBox() == false
  ) {
    e.preventDefault();
  }
});

// function of Error Message

function errorMessage(msg) {
  let div = document.createElement("div");
  div.classList.add("error-msg");
  div.innerHTML = msg;
  error.append(div);
  error.style.display = "initial";
}

// function of validating email

function checkEmail() {
  let email = document.querySelector("#email");
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  errorMessage("Enter Email address");
  if (email.value === "") {
    email.focus();
    return false;
  } else if (!emailRegex.test(email.value)) {
    errorMessage("Enter valid Email");
    email.focus();
    return false;
  }
  return true;
}

// function of validating password

function checkPassword() {
  let password = document.querySelector("#password");
  let passwordRegex = /^[a-zA-Z0-9]{6,16}$/;

  error.innerHTML = "";

  if (!password.value) {
    errorMessage("Enter Pasword");
    password.focus();
    return false;
  } else if (!passwordRegex.test(password.value)) {
    errorMessage("Invalid password format");
    password.focus();
    return false;
  }
  return true;
}

// function of validating retype password

function checkReTypePassword() {
  let password = document.querySelector("#password");
  let retype_password = document.querySelector("#retype-password");

  if (password.value != retype_password.value) {
    errorMessage("Enter both password similar");
    retype_password.focus();
    return false;
  }
}

// function of validating first name

function checkFirstName() {
  let fname = document.querySelector("#fname");
  let firstNameRegex = /^[a-zA-Z\s-]+$/;

  if (!fname) {
    errorMessage("Enter First name");
    fname.focus();
    return false;
  } else {
    if (!firstNameRegex.test(fname.value)) {
      errorMessage("Enter correct first name");
      fname.focus();
      return false;
    }
  }
}

// function of validating last name

function checkLastName() {
  let lname = document.querySelector("#lname");
  let lastNameRegex = /^[a-zA-Z\s-]+$/;

  if (!lname) {
    errorMessage("Enter last name");
    lname.focus();
    return false;
  } else {
    if (!lastNameRegex.test(lname.value)) {
      errorMessage("Enter correct last name");
      lname.focus();
      return false;
    }
  }
}

// function of validating gender

function checkGender() {
  let male_gender = document.querySelector("#male-gender");
  let female_gender = document.querySelector("#female-gender");

  if (!male_gender.checked && !female_gender.checked) {
    errorMessage("Select gender");
    return false;
  }
}

// function of validating country

function selectCountry() {
  let country = document.querySelector("#country");

  if (country.value == "") {
    errorMessage("Select Country");
    country.focus();
    return false;
  }
}

// function of validating conditions

function checkCheckBox() {
  let terms = document.querySelector("#terms");
  let newsletter = document.querySelector("#newsletter");

  if (!terms.checked || !newsletter.checked) {
    error("Accept all condition");
    return false;
  }
}
