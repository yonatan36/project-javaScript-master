import property from "../models/Property.js";

let id = 1;
let nextUserId = 1;
const createData = () => {
    let propertiesArr = [
      new property(
        id++,
        "BMW",
        120000,
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla, veritatis blanditiis architecto rem pariatur facere neque cupiditate dolores voluptatum soluta dignissimos, magni ab. Quod, mollitia adipisci? Quaerat quis accusamus accusantium quos reprehenderit delectus inventore odit corrupti, quibusdam eveniet, sint totam? Quod ab rem ducimus facilis fugit ipsa, hic asperiores.`,
        "./assets/imgs/1.jpg"
      ),
      new property(
        id++,
        "MERCEDS",
        150000,
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla, veritatis blanditiis architecto rem pariatur facere neque cupiditate dolores voluptatum soluta dignissimos, magni ab. Quod, mollitia adipisci? Quaerat quis accusamus accusantium quos reprehenderit delectus inventore odit corrupti, quibusdam eveniet, sint totam? Quod ab rem ducimus facilis fugit ipsa, hic asperiores.`,
        "./assets/imgs/6.jpg"
      ),
      new property(
        id++,
        "LAMBORGINI",
        5000000,
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla, veritatis blanditiis architecto rem pariatur facere neque cupiditate dolores voluptatum soluta dignissimos, magni ab. Quod, mollitia adipisci? Quaerat quis accusamus accusantium quos reprehenderit delectus inventore odit corrupti, quibusdam eveniet, sint totam? Quod ab rem ducimus facilis fugit ipsa, hic asperiores.`,
        "./assets/imgs/4.jpg"
      ),
      new property(
        id++,
        "FERARI",
        350000,
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla, veritatis blanditiis architecto rem pariatur facere neque cupiditate dolores voluptatum soluta dignissimos, magni ab. Quod, mollitia adipisci? Quaerat quis accusamus accusantium quos reprehenderit delectus inventore odit corrupti, quibusdam eveniet, sint totam? Quod ab rem ducimus facilis fugit ipsa, hic asperiores.`,
        "./assets/imgs/5.jpg"
      ),
      new property(
        id++,
        "LAMBORGINI",
        5000000,
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla, veritatis blanditiis architecto rem pariatur facere neque cupiditate dolores voluptatum soluta dignissimos, magni ab. Quod, mollitia adipisci? Quaerat quis accusamus accusantium quos reprehenderit delectus inventore odit corrupti, quibusdam eveniet, sint totam? Quod ab rem ducimus facilis fugit ipsa, hic asperiores.`,
        "./assets/imgs/8.jpg"
      ),
      new property(
        id++,
        "FERARI",
        350000,
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nulla, veritatis blanditiis architecto rem pariatur facere neque cupiditate dolores voluptatum soluta dignissimos, magni ab. Quod, mollitia adipisci? Quaerat quis accusamus accusantium quos reprehenderit delectus inventore odit corrupti, quibusdam eveniet, sint totam? Quod ab rem ducimus facilis fugit ipsa, hic asperiores.`,
        "./assets/imgs/9.jpg"
      ),
    ];
    return propertiesArr;
};
//check if have properties in data
const setInitialData = () => {
    let properties = localStorage.getItem("props")
    if (properties){
        return;
    }

    localStorage.setItem("props", JSON.stringify(createData()));
      localStorage.setItem("nextid", id + "");
      localStorage.setItem("nextUserId", nextUserId + "");
};

    setInitialData();
    
