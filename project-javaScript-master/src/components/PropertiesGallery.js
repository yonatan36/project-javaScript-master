let propertiesArr;
let galleryDiv;
let isAdmin;
let DelateProperty;

const initialPropertiesGallery = (
  propertiesArrFromHomePage,
  isAdminParam,
  DelatePropertyFromHomePage
) => {
  isAdmin = isAdminParam;
  galleryDiv = document.getElementById("home-page-properties-gallery");
  updatePropertiesGallery(propertiesArrFromHomePage);
  DelateProperty = DelatePropertyFromHomePage;
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
  const adminBtns = `<button type="button" class="btn btn-warning">
                      Edit</button
                    ><button type="button" class="btn btn-danger" id="propertygalleryDelateBtn-${id}">
                      Delate
                    </button> `;
  return `
   <div class="col">
                <div class="card">
                  <img
                    src="${img}"
                    class="card-img-top"
                    alt="${name}"
                  />
                  <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">
          ${description}
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${price}</li>
                  </ul>
                  <div class="card-body">
                    <button type="button" class="btn btn-success">
                      Buy Now</button
                    > 
                    ${isAdmin ? adminBtns : ""}
                  </div>
                </div>
              </div>
            
`;
};
//this function delate prpertie 
const createGallery = () => {
  let innerHTML = "";
  const handleDelateBtnClick =  (ev) => {
      let idxFromId = ev.target.id.split("-");
      DelateProperty(idxFromId[1]);
    };
     let delateBtnsBefore = document.querySelectorAll(
       "[id^='propertygalleryDelateBtn-']"
     );
     for (let delateBtn of delateBtnsBefore){
      delateBtn.removeEventListener("click", handleDelateBtnClick)
     }
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
  let Delatebtns = document.querySelectorAll(
    "[id^='propertygalleryDelateBtn-']"
  );
  for (let Delatebtn of Delatebtns) {
    Delatebtn.addEventListener("click", handleDelateBtnClick);
  }
};

export { initialPropertiesGallery, updatePropertiesGallery };
