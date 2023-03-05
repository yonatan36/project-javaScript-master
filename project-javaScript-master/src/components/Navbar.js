import CheckIfAdmin from "../utils/checkIfAdmin.js";
import CheckIfConnected from "../utils/checkIfConected.js";


const navBeforeLogin = document.getElementById("navBeforeLogin");
const navAfterLogin = document.getElementById("navAfterLogin");

  let isAdmin;
  let isConnected;


const NavbarSettings = () => {
  isAdmin = CheckIfAdmin();
  isConnected = CheckIfConnected();

  if (isConnected) {
    navBeforeLogin.classList.add("d-none");
    navAfterLogin.classList.remove("d-none");
 
  }
};

export default NavbarSettings;
