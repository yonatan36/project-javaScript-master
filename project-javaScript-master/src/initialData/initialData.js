import property from "../models/Property.js";

let id = 1;
let nextUserId = 1;
const createData = () => {
  let propertiesArr = [
    new property(
      id++,
      "Maserati",
      5000000,
      `Dr. Ing. h.c. F. Porsche AG, usually shortened to Porsche , is a German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans, headquartered in Stuttgart, Baden-Württemberg, Germany. The company is owned by Volkswagen AG, a controlling stake of which is owned by Porsche Automobil Holding SE. Porsche's current lineup includes the 718 Boxster/Cayman, 911 (992), Panamera, Macan, Cayenne and Taycan..Ferdinand Porsche (1875–1951) founded the company called "Dr. Ing. h. c. F. Porsche GmbH" with Adolf Rosenberger and Anton Piëch in 1931. The main offices was at Kronenstraße 24 in the centre of Stuttgart. Initially, the company offered motor vehicle development work and consulting,  but did not build any cars under its own name. One of the first assignments the new company received was from the German government to design a car for the people; that is.`,
      "./assets/imgs/6.jpg"
    ),
    new property(
      id++,
      "Bugatti",
      350000,
      `Automobiles Ettore Bugatti was a German then French manufacturer of high-performance automobiles. The company was founded in 1909 in the then-German city of Molsheim, Alsace, by the Italian-born industrial designer Ettore Bugatti. The cars were known for their design beauty and for their many race victories. Famous Bugatti automobiles include the Type 35 Grand Prix cars, the Type 41 "Royale", the Type 57 "Atlantic" and the Type 55 sports car.
      
      The death of Ettore Bugatti in 1947 proved to be a severe blow for the marque, and the death of his son Jean Bugatti in 1939 meant that there was no successor to lead the factory. No more than about 8,000 cars were made. The company struggled financially, and it released one last model in the 1950s before eventually being purchased for its airplane parts business in 1963.
      
      In 1987, an Italian entrepreneur bought the brand name and revived it as Bugatti Automobili SpA. .`,
      "./assets/imgs/buggati.jpg"
    ),
    new property(
      id++,
      "BMW",
      1200000,
      `Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari (1898–1988) in 1939 from the Alfa Romeo racing division as Auto Avio Costruzioni, the company built its first car in 1940, and produced its first Ferrari-badged car in 1947.

Fiat S.p.A. acquired 50% of Ferrari in 1969 and expanded its stake to 90% in 1988. In October 2014, Fiat Chrysler Automobiles (FCA) announced its intentions to separate Ferrari S.p.A. from FCA; as of the announcement FCA owned 90% of Ferrari.The separation began in October 2015 with a restructuring that established Ferrari N.V. (a company incorporated in the Netherlands) as the new holding company of the Ferrari S.p.A. group, and the subsequent sale by FCA of 10% of the shares in an IPO and concurrent listing of common shares on the New York Stock Exchange. Through the remaining steps of the separation, FCA's interest in Ferrari's.
`,
      "./assets/imgs/9.jpg"
    ),
    new property(
      id++,
      "Mercedes-Benz",
      1500000,
      `Mercedes-Benz (German pronunciation:  commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) is headquartered in Stuttgart, Baden-Württemberg, Germany. Mercedes-Benz AG produces consumer luxury vehicles and commercial vehicles badged as Mercedes-Benz. From November 2019 onwards, Mercedes-Benz-badged heavy commercial vehicles (trucks and buses) are managed by Daimler Truck, a former part of the Mercedes-Benz Group turned into an independent company in late 2021. In 2018, Mercedes-Benz was the largest brand of premium vehicles in the world, having sold 2.31 million passenger cars.

The brand's origins lie in Daimler-Motoren-Gesellschaft's 1901 Mercedes and Carl Benz's 1886 Benz Patent-Motorwagen, which is widely regarded as the first internal combustion engine in a self-propelled automobile."`,
      "./assets/imgs/8.jpg"
    ),
    new property(
      id++,
      "Lamborghini",
      50000000,
      `Automobili Lamborghini S.p.A.  is an Italian manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.

Ferruccio Lamborghini (1916–1993), an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with Ferrari. The company was noted for using a rear mid-engine, rear-wheel drive layout. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis. The firm's ownership changed three times after 1973, including a bankruptcy in 1978. American Chrysler Corporation took control of Lamborghini in 1987 and sold it to Malaysian investment group Mycom Setdco and Indonesian group V'Power Corporation in 1994. In 1998, Mycom Setdco and V'Power sold Lamborghini to the Volkswagen Group where it was placed under the control of the group's Audi division.
`,
      "./assets/imgs/4.jpg"
    ),
    new property(
      id++,
      "Ferrari",
      350000,
      `Ferrari S.p.A.  is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari (1898–1988) in 1939 from the Alfa Romeo racing division as Auto Avio Costruzioni, the company built its first car in 1940, and produced its first Ferrari-badged car in 1947.

Fiat S.p.A. acquired 50% of Ferrari in 1969 and expanded its stake to 90% in 1988. In October 2014, Fiat Chrysler Automobiles (FCA) announced its intentions to separate Ferrari S.p.A. from FCA; as of the announcement FCA owned 90% of Ferrari. The separation began in October 2015 with a restructuring that established Ferrari N.V. (a company incorporated in the Netherlands) as the new holding company of the Ferrari S.p.A. group, and the subsequent sale by FCA of 10% of the shares in an IPO and concurrent listing of common shares on the New York Stock Exchange. Through the remaining steps of the separation, FCA's interest in Ferrari's business was distributed to shareholders of FCA..
.`,
      "./assets/imgs/5.jpg"
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
    
