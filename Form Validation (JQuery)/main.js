let firstname = $("#firstname");
let lastname = $("#lastname");
let email = $("#email");
let mobileno = $("#mobileno");
let gender = $("#gender");
let dob = $("#dob");
let address = $("#address");
let city = $("#ciyt");
let pin = $("#pin");
let state = $("#state");
let qualification = $("#qualification");
let specification = $("#specification");
let password = $("#password");
let btn = $("button");

btn.click((e) => {
  e.preventDefault();

  let firstnameInp = firstname.val().split("").length;
  let lastnameInp = lastname.val().split("").length;
  let emailInp = email.val();
  let mobileInp = mobileno.val();
  let firstnameRegex = /^[1-9]+$/;
  let lastnameRegex = /^[1-9]+$/;
  let mobileRegex = /^\d{10}$/;
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let isValid = true;
  let firstEmptyField = null;

  $("input, textarea, select").each(function () {
    if ($(this).val() === "" || $(this).val() === "Select Qualification") {
      isValid = false;
      if (firstEmptyField === null) {
        firstEmptyField = this;
      }
    }
  });

  if (!isValid) {
    alert("Please fill out all fields.");
    $(firstEmptyField).focus();
  } else if (firstname.val().match(firstnameRegex)) {
    alert("You don't input number in your name.");
    firstname.focus();
  } else if (firstnameInp < 3 || firstnameInp > 6) {
    alert("Enter first name between 3 to 6 characters.");
    firstname.focus();
  } else if (lastname.val().match(lastnameRegex)) {
    alert("You don't input number in your name.");
    lastname.focus();
  } else if (lastnameInp < 3 || lastnameInp > 6) {
    alert("Enter first name between 3 to 6 characters.");
    lastname.focus();
  } else if (!emailInp.match(emailRegex)) {
    alert("Enter valid email address");
    email.focus();
  } else if (!mobileRegex.test(mobileInp)) {
    alert("Enter proper mobile number.");
    mobileno.focus();
  } else {
    $("form").off("submit").submit();
  }
});
