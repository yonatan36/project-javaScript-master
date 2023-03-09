import CheckIfAdmin from "../utils/checkIfAdmin.js";
import CheckIfConnected from "../utils/checkIfConected.js";


const navBeforeLogin = document.getElementById("navBeforeLogin");
const navAfterLogin = document.getElementById("navAfterLogin");
const navHomeLink = document.getElementById("nav-home-link");
const aboutus = document.getElementById("about-us");
const homepage = document.getElementById("home-page");

  let isAdmin;
  let isConnected;


const NavbarSettings = () => {
  isAdmin = CheckIfAdmin();
  isConnected = CheckIfConnected();

  if (isConnected) {
    navBeforeLogin.classList.add("d-none");
    navAfterLogin.classList.remove("d-none");
    navHomeLink.classList.remove("d-none")
    aboutus.classList.add("d-none");
    homepage.classList.remove("d-none")

 
  }
};

export default NavbarSettings;
