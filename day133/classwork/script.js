const getUserInfo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "nika",
                age: 14,
                email: "myemail@email.com",
            });
        }, 1000);
    });
};

const getUserPosts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { postName: "first post", postImage: "post1.jpg" },
                { postName: "scond post", postImage: "post2.jpg" },
                { postName: "third post", postImage: "post3.jpg" },
            ]);
        }, 2000);
    });
};

const getUserFriends = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "nika" },
                { id: 2, name: "gio" },
                { id: 3, name: "luka" },
            ]);
        }, 1500);
    });
};

async function loadAllUserData() {
    try {
        const [user, posts, friends] = await Promise.all([
            getUserInfo(),
            getUserPosts(),
            getUserFriends(),
        ]);

        console.log("user:", user);
        
        posts.forEach((p, i) => {
            console.log(`${i + 1}. ${p.postName} (${p.postImage})`);
        });

        console.log("friends:");
        friends.forEach((f, i) => {
            console.log(`${i + 1}. ${f.name}`);
        });
    } catch (err) {
        console.error("error : ", err);
    }
}

loadAllUserData();
