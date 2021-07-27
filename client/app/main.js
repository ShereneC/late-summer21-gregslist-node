import CarsController from "./Controllers/CarsController.js";
import HomesController from "./Controllers/HomesController.js";

class App {
  // valuesController = new ValuesController()
  carsController = new CarsController()
  homesController = new HomesController()

}

window["app"] = new App();