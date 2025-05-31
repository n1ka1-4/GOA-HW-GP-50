// 1
const colors = ["red", "green", "blue"];

let [firstColor, secondColor] = colors

// 2
const user = {
  name: "Giorgi",
  age: 25,
  country: "Georgia"
};

let {name, _, country} = user

// 3
const person = {
  name: "Nino",
  age: 28
};

let {name1, age, country1="unknown"} = user

// 4
const printUser = ({ name, age }) => {
  console.log(`${name} is ${age} years old`);
};

printUser({ name: "nika", age: 14 });

// 5
const numbers = [10, 20, 30, 40, 50];

let [first, ...rest] = numbers

// 6
const student = {
  name: "Luka",
  marks: {
    math: 90,
    physics: 85
  }
};

let { marks: { math, physics } } = student;
