// Wheel class that defines the properties of a wheel
class Wheel {
    // Constructor for the Wheel class
    constructor(diameter = 15, tireBrand = "FireStone") {
        this.diameter = diameter;
        this.tireBrand = tireBrand;
    }
    // Getter methods for the properties of the Wheel class
    get getDiameter() {
        return this.diameter;
    }
    // Setter method for the diameter property
    get getTireBrand() {
        return this.tireBrand;
    }
}
// Export the Wheel class
export default Wheel;
