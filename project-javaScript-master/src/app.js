import PAGES from "./models/pageModel.js";
import { handlePageChange } from "./routes/router.js";
import "./initialData/initialData.js";
import "./pages/RegisterPage.js";
import "./pages/loginPage.js";
import "./pages/homePage.js";
import "./pages/profilePage.js";
import showPopupNewProperty from "./utils/ShowPopupNewProperty.js";
import { showNewPopup } from "./pages/homePage.js";
import NavbarSettings from "./components/Navbar.js";
import CheckIfConected from "./utils/checkIfConected.js";

const navHomeLink = document.getElementById("nav-home-link");
const navAboutusLink = document.getElementById("nav-aboutus-link");
const navContactusLink = document.getElementById("nav-contactus-link");
const navRegisterPageLink = document.getElementById("nav-register-link");
const navLoginPageLink = document.getElementById("nav-login-link");
const navEditProfilePage = document.getElementById("nav-edit-profile-page");
const navLogout = document.getElementById("nav-logout");

window.addEventListener("load", () => {
  showPopupNewProperty(showNewPopup);
  NavbarSettings();
  if( CheckIfConected()){
       let user = localStorage.getItem("token");
       user = JSON.parse(user);
       navEditProfilePage.innerText = user.email;
  }
});

navHomeLink.addEventListener("click", () => {
  handlePageChange(PAGES.HOME);
});
navAboutusLink.addEventListener("click", () => {
  handlePageChange(PAGES.ABOUT);
});
navContactusLink.addEventListener("click", () => {
  handlePageChange(PAGES.CONTACT);
});
navRegisterPageLink.addEventListener("click", () => {
  handlePageChange(PAGES.REGISTER);
});
navLoginPageLink.addEventListener("click", () => {
  handlePageChange(PAGES.LOGIN);
});
navEditProfilePage.addEventListener("click",() =>{
  handlePageChange(PAGES.PROFILE)
})
navLogout.addEventListener("click", () => {
localStorage.removeItem("token");
location.reload();
});
