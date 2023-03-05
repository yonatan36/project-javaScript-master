import emailValidate from "../validation/emailValidate.js";
import validatePassword from "../validation/validatePassword.js";
import PAGES from "../models/pageModel.js";
import { handlePageChange } from "../routes/router.js";
import User from "../models/user.js";
import showToast from "../services/toast.js";

const inputName = document.getElementById("profile-input-name");
const inputLastName = document.getElementById("profile-input-last-name");
const inputState = document.getElementById("profile-input-state");
const inputCountry = document.getElementById("profile-input-country");
const inputCity = document.getElementById("profile-input-city");
const inputStreet = document.getElementById("profile-input-street");
const inputHouseNumber = document.getElementById("profile-input-house-number");
const inputZipCode = document.getElementById("profile-input-zip-code");
const inputEmail = document.getElementById("profile-input-email");
const inputPhone = document.getElementById("profile-input-phone");
const inputPassword = document.getElementById("profile-input-password");
const inputRepeatPassword = document.getElementById(
  "profile-input-repeat-password"
);
const btnProfile = document.querySelector("#profile-btn");

let nameOk = false;
let lastnameOk = false;
let stateOk = false;
let countryOk = false;
let cityOk = false;
let streetOk = false;
let housenumberOk = false;
let zipcodeOk = false;
let emailOk = false;
let phoneOk = false;
let passwordOk = false;
let repeatpasswordOk = false;

//have name alerdy in input
window.addEventListener("load", () => {
  if (inputName.value !== "") {
    checkNameInput();
  }
  if (inputState.value !== "") {
    checkinputState();
  }
  if (inputLastName.value !== "") {
    checkLastNameInput();
  }
  if (inputCountry.value !== "") {
    checkInputcountry();
  }
  if (inputCity.value !== "") {
    checkInputCity();
  }
  if (inputStreet.value !== "") {
    checkInputStreet();
  }
  if (inputHouseNumber.value !== "") {
    checkInputHouseNumber();
  }
  if (inputZipCode.value !== "") {
    checkInputZipCode();
  }
  if (inputEmail.value !== "") {
    checkInputEmail();
  }
  if (inputPhone.value !== "") {
    checkInputPhone();
  }
  if (inputPassword.value !== "") {
    checkInputPassword();
  }
  if (inputRepeatPassword.value !== "") {
    checkInputReaptPassword();
  }
});

const checkNameInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (inputName.value.length === 0) {
    inputName.classList.remove("is-invalid");
    document.getElementById("profile-alert-name").classList.add("d-none");
    nameOk = true;
  } else {
    if (reg.test(inputName.value)) {
      inputName.classList.remove("is-invalid");
      document.getElementById("profile-alert-name").classList.add("d-none");
      nameOk = true;
    } else {
      document.getElementById("profile-alert-name").classList.remove("d-none");
      inputName.classList.add("is-invalid");
      nameOk = false;
    }
    checkBtn();
  }
};
inputName.addEventListener("input", () => {
  checkNameInput();
});

const checkLastNameInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (inputLastName.value.length === 0) {
    inputLastName.classList.remove("is-invalid");
    document.getElementById("profile-alert-last-name").classList.add("d-none");
    nameOk = true;
  } else {
    if (reg.test(inputLastName.value)) {
      inputLastName.classList.remove("is-invalid");
      document
        .getElementById("profile-alert-last-name")
        .classList.add("d-none");
      lastnameOk = true;
    } else {
      document
        .getElementById("profile-alert-last-name")
        .classList.remove("d-none");
      inputLastName.classList.add("is-invalid");
      lastnameOk = false;
    }
    checkBtn();
  }
};
inputLastName.addEventListener("input", () => {
  checkLastNameInput();
});

const checkinputState = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (inputState.value.length === 0) {
    inputState.classList.remove("is-invalid");
    document.getElementById("profile-alert-state").classList.add("d-none");
    nameOk = true;
  } else {
    if (reg.test(inputState.value)) {
      inputState.classList.remove("is-invalid");
      document.getElementById("profile-alert-state").classList.add("d-none");
      stateOk = true;
    } else {
      document.getElementById("profile-alert-state").classList.remove("d-none");
      inputState.classList.add("is-invalid");
      stateOk = false;
    }
    checkBtn();
  }
};
inputState.addEventListener("input", () => {
  checkinputState();
});

const checkInputcountry = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (inputCountry.value.length === 0) {
    inputCountry.classList.remove("is-invalid");
    document.getElementById("profile-alert-country").classList.add("d-none");
    nameOk = true;
  } else {
    if (reg.test(inputCountry.value)) {
      inputCountry.classList.remove("is-invalid");
      document.getElementById("profile-alert-country").classList.add("d-none");
      countryOk = true;
    } else {
      document
        .getElementById("profile-alert-country")
        .classList.remove("d-none");
      inputCountry.classList.add("is-invalid");
      countryOk = false;
    }
    checkBtn();
  }
};
inputCountry.addEventListener("input", () => {
  checkInputcountry();
});

const checkInputCity = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (inputCity.value.length === 0) {
    inputCity.classList.remove("is-invalid");
    document.getElementById("profile-alert-city").classList.add("d-none");
    nameOk = true;
  } else {
    if (reg.test(inputCity.value)) {
      inputCity.classList.remove("is-invalid");
      document.getElementById("profile-alert-city").classList.add("d-none");
      cityOk = true;
    } else {
      document.getElementById("profile-alert-city").classList.remove("d-none");
      inputCity.classList.add("is-invalid");

      countryOk = false;
    }
    checkBtn();
  }
};
inputCity.addEventListener("input", () => {
  checkInputCity();
});

const checkInputStreet = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{0,}$", "g");
  if (inputStreet.value.length === 0) {
    inputStreet.classList.remove("is-invalid");
    document.getElementById("profile-alert-street").classList.add("d-none");
    nameOk = true;
  } else {
    if (reg.test(inputStreet.value)) {
      inputStreet.classList.remove("is-invalid");
      document.getElementById("profile-alert-street").classList.add("d-none");
      streetOk = true;
    } else {
      document
        .getElementById("profile-alert-street")
        .classList.remove("d-none");
      inputStreet.classList.add("is-invalid");
      streetOk = false;
    }
    checkBtn();
  }
};
inputStreet.addEventListener("input", () => {
  checkInputStreet();
});

const checkInputHouseNumber = () => {
  const reg = new RegExp("[0-9]");
  if (inputHouseNumber.value.length === 0) {
    inputHouseNumber.classList.remove("is-invalid");
    document
      .getElementById("profile-alert-house-number")
      .classList.add("d-none");
    nameOk = true;
  } else {
    if (reg.test(inputHouseNumber.value)) {
      inputHouseNumber.classList.remove("is-invalid");
      document
        .getElementById("profile-alert-house-number")
        .classList.add("d-none");
      housenumberOk = true;
    } else {
      document
        .getElementById("profile-alert-house-number")
        .classList.remove("d-none");
      inputHouseNumber.classList.add("is-invalid");
      housenumberOk = false;
    }
    checkBtn();
  }
};
inputHouseNumber.addEventListener("input", () => {
  checkInputHouseNumber();
});

const checkInputZipCode = () => {
  const reg = new RegExp("^[0-9]");
  if (inputZipCode.value.length === 0) {
    inputZipCode.classList.remove("is-invalid");
    document.getElementById("profile-alert-zip-code").classList.add("d-none");
    nameOk = true;
  } else {
    if (reg.test(inputZipCode.value)) {
      inputZipCode.classList.remove("is-invalid");
      document.getElementById("profile-alert-zip-code").classList.add("d-none");
      zipcodeOk = true;
    } else {
      document
        .getElementById("profile-alert-zip-code")
        .classList.remove("d-none");
      inputZipCode.classList.add("is-invalid");
      zipcodeOk = false;
    }
    checkBtn();
  }
};
inputZipCode.addEventListener("input", () => {
  checkInputZipCode();
});

const checkInputEmail = () => {
  const reg = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
    "ig"
  );
  if (inputEmail.value.length === 0) {
    inputEmail.classList.remove("is-invalid");
    document.getElementById("profile-alert-email").classList.add("d-none");
    nameOk = true;
  } else {
    let errorArr = emailValidate(inputEmail.value);
    if (errorArr.length === 0) {
      inputEmail.classList.remove("is-invalid");
      document.getElementById("profile-alert-email").classList.add("d-none");
      emailOk = true;
    } else {
      document.getElementById("profile-alert-email").classList.remove("d-none");
      inputEmail.classList.add("is-invalid");
      document.getElementById("profile-alert-email").innerHTML =
        errorArr.join("<br>");
      emailOk = false;
    }
  }
};
inputEmail.addEventListener("input", () => {
  checkInputEmail();
});

const checkInputPhone = () => {
  const reg = new RegExp("[0-9]");
  if (inputPhone.value.length === "") {
    inputPhone.classList.remove("is-invalid");
    document.getElementById("profile-alert-phone").classList.add("d-none");
    nameOk = true;
  } else {
    if (reg.test(inputPhone.value)) {
      inputPhone.classList.remove("is-invalid");
      document.getElementById("profile-alert-phone").classList.add("d-none");
      phoneOk = true;
    } else {
      document.getElementById("profile-alert-phone").classList.remove("d-none");
      inputPhone.classList.add("is-invalid");
      phoneOk = false;
    }
    checkBtn();
  }
};
inputPhone.addEventListener("input", () => {
  checkInputPhone();
});

const checkInputPassword = () => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%?&])[A-Za-z\\d@$!*%?&]{8,250}$",
    "g"
  );
  if (inputPassword.value.length === 0) {
    inputPassword.classList.remove("is-invalid");
    document.getElementById("profile-alert-password").classList.add("d-none");
    nameOk = true;
  } else {
    let errorArr = validatePassword(inputPassword.value);
    if (errorArr.length === 0) {
      inputPassword.classList.remove("is-invalid");
      document.getElementById("profile-alert-password").classList.add("d-none");
      passwordOk = true;
    } else {
      document
        .getElementById("profile-alert-password")
        .classList.remove("d-none");
      inputPassword.classList.add("is-invalid");
      document.getElementById("profile-alert-password").innerHTML =
        errorArr.join("<br>");
      passwordOk = false;
    }
    checkBtn();
  }
};
inputPassword.addEventListener("input", () => {
  checkInputPassword();
  console.log(checkInputPassword, "login");
});

const checkInputReaptPassword = () => {
  const reg = new RegExp(inputPassword.value);
  if (inputRepeatPassword.value.length === 0) {
    inputRepeatPassword.classList.remove("is-invalid");
    document
      .getElementById("profile-alert-repeat-password")
      .classList.add("d-none");
    nameOk = true;
  } else {
    if (reg.test(inputRepeatPassword.value)) {
      inputRepeatPassword.classList.remove("is-invalid");
      document
        .getElementById("profile-alert-repeat-password")
        .classList.add("d-none");
      repeatpasswordOk = true;
    } else {
      document
        .getElementById("profile-alert-repeat-password")
        .classList.remove("d-none");
      inputRepeatPassword.classList.add("is-invalid");
      repeatpasswordOk = false;
    }
    checkBtn();
  }
};
inputRepeatPassword.addEventListener("input", () => {
  checkInputReaptPassword();
});

const checkBtn = () =>
  (btnProfile.disabled = !(
    nameOk &&
    lastnameOk &&
    stateOk &&
    countryOk &&
    cityOk &&
    streetOk &&
    emailOk &&
    passwordOk &&
    repeatpasswordOk &&
    phoneOk &&
    housenumberOk &&
    zipcodeOk
  ));
// check if the users proper
btnProfile.addEventListener("click", () => {
  if (
    !(
      nameOk &&
      lastnameOk &&
      stateOk &&
      countryOk &&
      cityOk &&
      streetOk &&
      emailOk &&
      passwordOk &&
      repeatpasswordOk &&
      phoneOk &&
      housenumberOk &&
      zipcodeOk
    )
  ) {
    return;
  }
  //the first user
  let users = localStorage.getItem("users");
  let token = localStorage.getItem("token");

 if(users && token) {
    users = JSON.parse(users);
    token = JSON.parse(token)
    //check if have email 
    let useremail = users.find((item)=> item.email === inputEmail.value)
    let user = users.find((item) =>item.id === token.id )
    if(useremail && user.id !== useremail.id){
      showToast("the email alrady teken" , false)
    return;
    }
if (user){
  user.name = token.name = inputName.value;
  user.lastName = inputLastName.value;
  user.state = inputState.value;
  user.country = inputCountry.value;
  user.city =inputCity.value;
  user.street =  inputStreet.value;
  user.email = token.email = inputEmail.value;
  user.password = token.password = inputPassword.value;
  user.repeatpassword =  inputRepeatPassword.value;
  user.phone = inputPhone.value;
  user.housenumber = inputHouseNumber.value;
  user.zipcode = inputZipCode.value;


  localStorage.setItem("users", JSON.stringify(users));
}
  }
  handlePageChange(PAGES.LOGIN);
});
