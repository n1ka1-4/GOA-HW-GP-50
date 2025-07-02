// 1
const seaLion = new Map([
    ["firstName", "Luka"],
    ["lastName", "Zghvislomidze"],
    ["habitat", "Atlantic Ocean"],
]);

// 2
seaLion.set("age", 5);

// 3
for (const key of seaLion.keys()) {
    console.log(`${key}: ${seaLion.get(key)}`);
}
