import getNextId from "./getNextId.js";
import CheckIfAdmin from "../utils/CheckIfAdmin.js";
import { showNewPopup } from "../pages/homePage.js";

const btnAddNewProperty = document.getElementById("btnAddNewProperty");

let nextId;
let isAdmin;


const addNeeProperty = () => {
  nextId = getNextId();
  isAdmin = CheckIfAdmin();
  // display the btn if the token dont admin
  if (!isAdmin) {
    btnAddNewProperty.classList.add("d-none");
  }
  
  btnAddNewProperty.addEventListener("click", () => {
    showNewPopup();
  });
};

export default addNeeProperty;
