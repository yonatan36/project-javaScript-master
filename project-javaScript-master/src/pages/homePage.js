import {
  initialPropertiesGallery,
  updatePropertiesGallery,
} from "../components/PropertiesGallery.js";
import {
  initialPropertiesList,
  updatePropertiesList,
} from "../components/PropertiesList.js";
import {
  initialPropertiesCarousel,
  updatePropertiesCarousel,
} from "../components/PropertiesCarousle.js";
import { initPopup  } from "../components/Popup.js";
import CheckIfAdmin from "../utils/checkIfAdmin.js";




let isAdmin;

let propertiesArr, originalPropertiesArr;


// div displays
const BtnhomeDisplayList = document.getElementById("homedisplayList");
const BtnhomeDisplayGallery = document.getElementById("homedisplayGallery");
const BtnhomedisplayCaruosle = document.getElementById("homedisplayCaruosle");
//btns ID
const propertiesList = document.getElementById("propertiesList");
const propertiesGallery = document.getElementById("propertiesGallery");
const propertiesCarusel = document.getElementById("propertiesCarusel");
const buttonUP = document.getElementById("ButtonUP");
const buttonDown = document.getElementById("Buttondown");
const homePageSearchInput = document.getElementById("homePageSearchInput");


window.addEventListener("load", () => {
   propertiesArr = localStorage.getItem("props");
 
  //dont have proprties
  if (!propertiesArr) {
    return;
  }

  //have properties
 
    propertiesArr = JSON.parse(propertiesArr);
  originalPropertiesArr = [...propertiesArr];
  //Communicates from home page to propertiesGallery
   isAdmin = CheckIfAdmin();
  initialPropertiesGallery(propertiesArr, isAdmin, DelateProperty, showPopup);
  initialPropertiesList(propertiesArr, isAdmin, DelateProperty, showPopup);
  initialPropertiesCarousel(propertiesArr, DelateProperty);

});

//Btn List
BtnhomeDisplayList.addEventListener("click", () => {
  propertiesList.classList.add("d-block");
  propertiesList.classList.remove("d-none");
  propertiesGallery.classList.add("d-none");
  propertiesCarusel.classList.add("d-none");
});
// Btn Gallery
BtnhomeDisplayGallery.addEventListener("click", () => {
  propertiesGallery.classList.add("d-block");
  propertiesGallery.classList.remove("d-none");
  propertiesList.classList.add("d-none");
  propertiesCarusel.classList.add("d-none");
});
//Btn Caruosle
BtnhomedisplayCaruosle.addEventListener("click", () => {
  propertiesCarusel.classList.add("d-block");
  propertiesCarusel.classList.remove("d-none");
  propertiesList.classList.add("d-none");
  propertiesGallery.classList.add("d-none");
});
//Btns up and down
buttonDown.addEventListener("click", () => {
  sortPropertys(false);
});
buttonUP.addEventListener("click", () => {
  sortPropertys();
});

//Btns Up and Down
const sortPropertys = (asc = true) => {
  if (asc) {
    propertiesArr.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    propertiesArr.sort((a, b) => b.name.localeCompare(a.name));
  }
  updateDisplay();
};

//this function do search to proprties
homePageSearchInput.addEventListener("input", (ev) => {
  let regex = new RegExp("^" + ev.target.value, "i");
  //do filter on the originalPropertiesArr, only the propertiesArr chage, do new array.
  propertiesArr = originalPropertiesArr.filter((item) => {
  let reg =  regex.test(item.name);
  return reg;
})
  updateDisplay();
});



//update the properties
const updateDisplay = () => {
  updatePropertiesCarousel(propertiesArr);
  updatePropertiesGallery(propertiesArr);
  updatePropertiesList(propertiesArr);
};

const savaToLocalStorage = (arrToSave) => {
  localStorage.setItem("props", JSON.stringify(arrToSave));
};



const DelateProperty = (id) => {
  id = +id;
  
  originalPropertiesArr = originalPropertiesArr.filter(
    (item) => item.id !== id
  );
  savaToLocalStorage(originalPropertiesArr);
  propertiesArr = propertiesArr.filter((item) => item.id !== id);
  updateDisplay();
};

const showPopup = (id) => {
  let selectedProperty = propertiesArr.find((item) => item.id === +id);
  if (!selectedProperty) {
    return;
  }
  initPopup(selectedProperty , editProperty);
};


 const showNewPopup = () =>{
    initPopup(undefined, addNewProperty);
 }
const addNewProperty = (newProperty) =>{
  originalPropertiesArr =[...originalPropertiesArr, newProperty];
  let nextId = +newProperty.id + 1;
  localStorage.setItem("nextid", +nextId + "");
  propertiesArr = [...originalPropertiesArr]
editProperty();
}

const editProperty = () => {
  savaToLocalStorage(originalPropertiesArr)
updateDisplay()
};


export {showPopup , showNewPopup};