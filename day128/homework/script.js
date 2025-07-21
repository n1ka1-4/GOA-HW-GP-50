// 1
function step1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("step 1"), 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("step 2"), 1000);
    });
}

function step3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("step 3"), 1000);
    });
}

step1()
    .then((result) => {
        console.log(result);
        return step2();
    })
    .then((result) => {
        console.log(result);
        return step3();
    })
    .then((result) => {
        console.log(result);
    });

// 2
new Promise((resolve) => {
    resolve(2);
})
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => num * 4)
    .then((result) => console.log("result: ", result));

// 3
new Promise((resolve) => {
    setTimeout(() => {
        resolve("gio");
    }, 2000);
})
    .then((name) => {
        return `hello ${name}`;
    })
    .then((greeting) => {
        console.log(greeting);
    });

// 4
function getRandomNumberPromise() {
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 10) + 1;
        if (num > 5) {
            resolve(num);
        } else {
            reject(`low number: ${num}`);
        }
    });
}

getRandomNumberPromise()
    .then((num) => {
        console.log("high number:", num);
    })
    .catch((error) => {
        console.error("error:", error);
    });

// 5
function findUser() {
    return new Promise((resolve, reject) => {
        const isUserFound = Math.round(Math.random());
        const timeToFindUser = Math.floor(Math.random() * 10) * 1000;

        setTimeout(() => {
            if (isUserFound === 1) {
                const user = {
                    firstName: "jhon",
                    lastName: "Smith",
                    age: 25,
                    gender: "male",
                    email: "jhon@superman.com",
                };
                resolve(user);
            } else {
                reject("user not found");
            }
        }, timeToFindUser);
    });
}

findUser().then(
    (user) => {
        console.log("user found: ", user);
    },
    (error) => {
        console.error("error: ", error);
    }
);
