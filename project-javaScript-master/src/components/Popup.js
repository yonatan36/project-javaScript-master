import property from "../models/Property.js";
import getNextId from "../utils/getNextId.js";


let selectedProperty, editProperty;

const editPropertiesPopupImgDisplay = document.getElementById(
  "editPropertiesPopupImgDisplay"
);
const editPropertiesPopupName = document.getElementById(
  "editPropertiesPopupName"
);
const editPropertiesPopupDescription = document.getElementById(
  "editPropertiesPopupDescription"
);
const editPropertiesPopupPrice = document.getElementById(
  "editPropertiesPopupPrice"
);
const editPropertiesPopupImg = document.getElementById(
  "editPropertiesPopupImg"
);
const editPropertiesPopup = document.getElementById("editPropertiesPopup");
const editPropertiesPopupSaveBtn = document.getElementById(
  "editPropertiesPopupSaveBtn"
);


const initPopup = (
  selectedPropertiesFromHomePage,
  editPropertyFromHomePgae
) => {

if(selectedPropertiesFromHomePage){
  selectedProperty = selectedPropertiesFromHomePage;

}else{
selectedProperty = new property(getNextId(),"" , 0,"", "")
}

  editProperty = editPropertyFromHomePgae;
  editPropertiesPopupImgDisplay.src = selectedProperty.img;
  editPropertiesPopupName.value = selectedProperty.name;
  editPropertiesPopupDescription.value = selectedProperty.description;
  editPropertiesPopupPrice.value = selectedProperty.price;
  editPropertiesPopupImg.value = selectedProperty.img;
  showPopup();
};

const showPopup = () => {
  editPropertiesPopup.classList.remove("d-none");
};
const hidepopup = () => {
  editPropertiesPopup.classList.add("d-none");
};

//hide popup
window.addEventListener("load", () => {
  editPropertiesPopup.addEventListener("click", (ev) => {
    if (
      ev.target.id !== "editPropertiesPopup" &&
      ev.target.id !== "editPropertiesPopupCancelBtn" &&
      ev.target.id !== "editPropertiesPopupCancelBtnIcon"
    ) {
      return;
    }
    hidepopup();
  });
  editPropertiesPopupSaveBtn.addEventListener("click", () => {
      selectedProperty.name = editPropertiesPopupName.value;
      selectedProperty.description = editPropertiesPopupDescription.value;
      selectedProperty.price = editPropertiesPopupPrice.value;
      selectedProperty.img = editPropertiesPopupImg.value;
      editProperty(selectedProperty);
      hidepopup();
    });
  editPropertiesPopupImg.addEventListener("input", () => {
    editPropertiesPopupImgDisplay.src = editPropertiesPopupImg.value;
  });
 
});


export { initPopup, showPopup, hidepopup };
