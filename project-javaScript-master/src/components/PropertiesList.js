let propertiesArr;
let listDiv;
let isAdmin;
let DelateProperty;

const initialPropertiesList = (
  propertiesArrFromHomePage,
  isAdminParam,
  DelatePropertyFromHomePage
) => {
  isAdmin = isAdminParam;
  listDiv = document.getElementById("home-page-properties-list");
  updatePropertiesList(propertiesArrFromHomePage);
  DelateProperty = DelatePropertyFromHomePage;
};

const updatePropertiesList = (propertiesArrFromHomePage) => {
  /*
    this function will get data from homepage and create new List.
    if the carousel already exists it will remove the old one and
    create new one
  */
  propertiesArr = propertiesArrFromHomePage;
  createList();
};
const createCard = (name, description, price, img, id) => {
  const adminBtns = `  <button type="button" class="btn btn-warning w-100">
    <i class="bi bi-pen-fill"></i> Edit
  </button>
  <button type="button" class="btn btn-danger w-100"  id="propertyListDelateBtn-${id}">
    <i class="bi bi-x-circle-fill"></i> Delete
  </button>`;
  return `
      <li class="list-group-item">
    <div class="row">
        <div class="col-md-2">
        <img src="${img}" class="img-fluid" alt="${name}" />
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
            ${price}
            </h6>
            <p class="card-text">
            ${description}
            </p>
        </div>
        </div>
        <div class="col-md-2">
        <button type="button" class="btn btn-success w-100">
          <i class="bi bi-currency-dollar"></i> Buy now
        </button>
   ${isAdmin ? adminBtns : ""}
        </div>
    </div>
    </li>
  `;
};

//this function delate prpertie 
const createList = () => {
  let innerHTML = "";
  const handleDelateBtnClick = (ev) => {
    let idxFromId = ev.target.id.split("-");
    DelateProperty(idxFromId[1]);
  };
  let delateBtnsBefore = document.querySelectorAll(
    "[id^='propertyListDelateBtn-']"
  );
  //remove old events
  for (let delateBtn of delateBtnsBefore) {
    delateBtn.removeEventListener("click", handleDelateBtnClick);
  }
  //create new elemnts and remove old ones
  for (let property of propertiesArr) {
    innerHTML += createCard(
      property.name,
      property.description,
      property.price,
      property.img,
      property.id
    );
 
  }
  listDiv.innerHTML = innerHTML;
  let Delatebtns = document.querySelectorAll("[id^='propertyListDelateBtn-']");
 //add events to the new btns
  for (let Delatebtn of Delatebtns) {
    Delatebtn.addEventListener("click", handleDelateBtnClick);
  }
};

export { initialPropertiesList, updatePropertiesList };
