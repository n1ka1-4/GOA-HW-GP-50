// 1
const animals = new Map([
    ["Dog", "Bark"],
    ["Cat", "Meow"],
    ["Cow", "Moo"],
]);

for (const animal of animals.keys()) {
    console.log(`${animal} says: ${animals.get(animal)}`);
}

// 2
const names = ["Davit", "Nino", "Davit", "Saba", "Nino"];
const uniqueNames = new Set(names);

console.log([...uniqueNames]);

// 3
setTimeout(() => console.log("Start"), 0);
setTimeout(() => console.log("Middle"), 1000);
setTimeout(() => console.log("End"), 2000);

// 4
const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");

myMap.delete("key1");

console.log(myMap.has("key1"));
console.log(myMap.has("key2"));

// 5
const attendees = ["Luka", "Nika", "Luka", "Tiko", "Nika"];
const uniqueAttendees = new Set(attendees);

for (const name of uniqueAttendees) {
    console.log(`Checking ticket for ${name}`);
}
