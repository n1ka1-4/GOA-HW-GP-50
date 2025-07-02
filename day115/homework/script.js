// 1
class Shape {
    constructor(length, width, color, coordinates) {
        this.length = length;
        this.width = width;
        this.color = color;
        this.coordinates = coordinates;
    }

    changeLength(newLength) {
        this.length = newLength;
    }

    changeWidth(newWidth) {
        this.width = newWidth;
    }

    changeColor(newColor) {
        this.color = newColor;
    }

    moveTo(newCoordinates) {
        this.coordinates = newCoordinates;
    }

    draw() {
        console.log(
            `coordinates: ${this.coordinates} drawing shape, size: ${this.length}/${this.width}, color: ${this.color}.`
        );
    }
}

// 2
class Rectangle extends Shape {
  draw() {
    console.log(`coordinates: ${this.coordinates} drawing rectangle, size: ${this.length}/${this.width}, color: ${this.color}.`);
  }
}

class Triangle extends Shape {
  draw() {
    console.log(`coordinates: ${this.coordinates} drawing trangle, size: ${this.length}/${this.width}, color: ${this.color}.`);
  }
}

class Circle extends Shape {
  draw() {
    console.log(`coordinates: ${this.coordinates} drawing circle, size: ${this.length}/${this.width}, color: ${this.color}.`);
  }
}
