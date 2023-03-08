import { showPopup, initPopup } from "./Popup.js";

let propertiesArr;
let galleryDiv;
let isAdmin;
let DelateProperty;
let selectedPropert;

const initialPropertiesGallery = (
  propertiesArrFromHomePage,
  isAdminParam,
  DelatePropertyFromHomePage,
  selectedPropertiesFromHomePage
) => {
  isAdmin = isAdminParam;
  galleryDiv = document.getElementById("home-page-properties-gallery");
  DelateProperty = DelatePropertyFromHomePage;
  selectedPropert = selectedPropertiesFromHomePage;
  updatePropertiesGallery(propertiesArrFromHomePage);
};

const updatePropertiesGallery = (propertiesArrFromHomePage) => {
  /*
    this function will get data from homepage and create new Gallery.
    if the carousel already exists it will remove the old one and
    create new one
  */
  propertiesArr = propertiesArrFromHomePage;
  createGallery();
};
const createCard = (name, description, price, img, id) => {
  const adminBtns = `
      <div class="admin-btns">
      <button type="button" class="btn btn-warning btn-sm mr-2 px-4 py-2" id="propertyEditGalleryBtn-${id}">Edit</button>
      <button type="button" class="btn btn-danger btn-sm ml-3 px-4 py-2" id="propertyGalleryDeleteBtn-${id}">Delete</button>
    </div>
  `;

  return `
    <div class="col">
      <div class="card">
        <img src="${img}" class="card-img-top" alt="${name}" />
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${price}</li>
        </ul>
        <div class="card-body d-flex justify-content-center">
          <button type="button" class="btn btn-success btn-sm mx-1 px-3 py-2">Buy Now</button>
          ${isAdmin ? adminBtns : ""}
        </div>
      </div>
    </div>
  `;
};

const handleEditBtnClick = (ev) => {
  let idxFromId = ev.target.id.split("-");
  console.log("here", ev);
  selectedPropert(idxFromId[1]);
  showPopup(initPopup);
};

const handleDelateBtnClick = (ev) => {
  let idxFromId = ev.target.id.split("-");
  DelateProperty(idxFromId[1]);
};

const clearEventListeners = (idKeyword, handlefunction) => {
  let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //add events to the new btns
  for (let btn of btnsBefore) {
    btn.removeEventListener("click", handlefunction);
  }
};

//this function delate prpertie
const createGallery = () => {
  let innerHTML = "";
  clearEventListeners("propertyGalleryDeleteBtn", handleDelateBtnClick);
  clearEventListeners("propertyEditGalleryBtn", handleEditBtnClick);

  for (let property of propertiesArr) {
    innerHTML += createCard(
      property.name,
      property.description,
      property.price,
      property.img,
      property.id
    );
  }

  galleryDiv.innerHTML = innerHTML;
  createDelateBtnEventListener(
    "propertyGalleryDeleteBtn",
    handleDelateBtnClick
  );
  createDelateBtnEventListener("propertyEditGalleryBtn", handleEditBtnClick);
};
const createDelateBtnEventListener = (idKeyword, handlefunction) => {
  let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
  for (let btn of btns) {
    btn.addEventListener("click", handlefunction);
  }
};

export { initialPropertiesGallery, updatePropertiesGallery };
