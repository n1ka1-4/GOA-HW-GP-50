function getWeather() {
    return new Promise((resolve) => {
        const conditions = ["snow", "sun", "rain"];
        const randomCondition =
            conditions[Math.floor(Math.random() * conditions.length)];
        resolve(randomCondition);
    });
}

getWeather().then((condition) => {
    if (condition === "snow") {
        console.log("❄️ its snowing");
    } else if (condition === "sun") {
        console.log("☀️ its sunny");
    } else if (condition === "rain") {
        console.log("🌧️ its raining");
    } else {
        console.log("🤷 unknown weather condition: ", condition);
    }
});
