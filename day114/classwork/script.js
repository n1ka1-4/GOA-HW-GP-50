class gunniePig {
    constructor(color, size, year, month, day) {
    this.color = color;
    this.size = size;
    this.birthdayTime = new Date(year, month - 1, day);
  }
  birthday() {
    const today = new Date();
    let years = today.getFullYear() - this.birthdayTime.getFullYear();
    let months = today.getMonth() - this.birthdayTime.getMonth();
    let days = today.getDate() - this.birthdayTime.getDate();

    return `years: ${years} / months: ${months} / days: ${days}`
  }
}

const fatPig = new gunniePig("red", "1x1", 2024, 4, 12);

console.log(fatPig.birthday());