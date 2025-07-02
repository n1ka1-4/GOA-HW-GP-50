// 1
class Transport {
    constructor(maxSpeed, color, fuel) {
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.fuel = fuel;
        this.distanceTraveled = 0;
    }

    refuel(liters) {
        if (typeof liters !== "number" || liters < 0) {
            throw new Error("Fuel amount must be a non-negative number.");
        }
        this.fuel += liters;
    }

    changeColor(newColor) {
        if (typeof newColor !== "string") {
            throw new Error("Color must be a string.");
        }
        this.color = newColor;
    }

    getInfo() {
        return `This is a generic transport with max speed of ${this.maxSpeed}; color: ${this.color}; fuel: ${this.fuel}; distance traveled: ${this.distanceTraveled}`;
    }

    move(distance, fuelNeeded) {
        if (typeof distance !== "number" || typeof fuelNeeded !== "number") {
            throw new Error("Both distance and fuelNeeded must be numbers.");
        }

        if (this.fuel < fuelNeeded) {
            throw new Error("Not enough fuel to move.");
        }

        this.distanceTraveled += distance;
        this.fuel -= fuelNeeded;
    }
}

// 2
class Car extends Transport {
    getInfo() {
        return `This is a car with max speed of ${this.maxSpeed}; color: ${this.color}; fuel: ${this.fuel}; distance traveled: ${this.distanceTraveled}`;
    }
}

class Plane extends Transport {
    getInfo() {
        return `This is a plane with max speed of ${this.maxSpeed}; color: ${this.color}; fuel: ${this.fuel}; distance traveled: ${this.distanceTraveled}`;
    }
}

class Boat extends Transport {
    getInfo() {
        return `This is a boat with max speed of ${this.maxSpeed}; color: ${this.color}; fuel: ${this.fuel}; distance traveled: ${this.distanceTraveled}`;
    }
}
