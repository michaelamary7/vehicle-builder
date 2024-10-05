// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";
// create an array of vehicles
const vehicles = [];
// TODO: uncomment once trucks are implemented
const truck1 = new Truck(Cli.generateVin(), "Blue", "Ford", "Ranger", 1996, 10000, 150, [], 10000);
const truck2 = new Truck(Cli.generateVin(), "White", "Toyota", "Tundra", 2021, 7000, 80, [], 24000);
// will use default wheels
const car1 = new Car(Cli.generateVin(), 'Silver', 'Toyota', 'Camry', 2007, 12000, 160, []);
const car2 = new Car(Cli.generateVin(), 'Yellow', 'Volvo', '850 T-5R', 1996, 3000, 150, []);
const car3 = new Car(Cli.generateVin(), 'Orange', 'Subaru', 'Crosstrek', 2024, 1000, 220, []);
// TODO: uncomment once motorbikes are implemented
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike2Wheels = [new Wheel(19, "Pirelli"), new Wheel(16, "Pirelli")];
const motorbike1 = new Motorbike(Cli.generateVin(), "Black", "Yamaha", "YZF-R3", 2021, 700, 120, motorbike1Wheels);
const motorbike2 = new Motorbike(Cli.generateVin(), 'Blue', 'Suzuki', 'Katana', 2006, 650, 130, motorbike2Wheels);
// push vehicles to array
// TODO: uncomment once trucks are implemented
vehicles.push(truck1);
vehicles.push(truck2);
vehicles.push(car1);
vehicles.push(car2);
vehicles.push(car3);
// TODO: uncomment once motorbikes are implemented
vehicles.push(motorbike1);
vehicles.push(motorbike2);
// create a new instance of the Cli class
const cli = new Cli(vehicles);
// start the cli
cli.startCli();
