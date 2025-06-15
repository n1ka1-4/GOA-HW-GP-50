const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", () => {
    let input = document.getElementById("task-input");
    let text = input.value.trim();
    if (text === "") return;
});

let li = document.createElement("li");
let span = document.createElement("span");
span.innerText = text;
li.appendChild(span);

let buttons = document.createElement("div");
buttons.className = "task-buttons";

// i did like this because i think it is much easyer like that
let editBtn = document.createElement("button");
editBtn.innerText = "Edit";
editBtn.className = "edit-btn";
editBtn.onclick = function () {
    let newText = prompt("Edit task:", span.innerText);
    if (newText !== null && newText.trim() !== "") {
        span.innerText = newText.trim();
    }
};

// with complite we delete everything in list and add into complite
let completeBtn = document.createElement("button");
completeBtn.innerText = "Complete";
completeBtn.className = "complete-btn";
completeBtn.onclick = function () {
    document.getElementById("task-list").removeChild(li);
    buttons.removeChild(editBtn);
    buttons.removeChild(completeBtn);

    // i added undo button if someone acidently click complite
    let undoBtn = document.createElement("button");
    undoBtn.innerText = "Undo";
    undoBtn.className = "undo-btn";
    undoBtn.onclick = function () {
        document.getElementById("completed-list").removeChild(li);
        addTaskBack(span.innerText);
    };
    buttons.insertBefore(undoBtn, deleteBtn);
    document.getElementById("completed-list").appendChild(li);
};

// delete is easy just delete everything
let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.className = "delete-btn";
deleteBtn.onclick = function () {
    li.remove();
};

// we add buttons
buttons.appendChild(editBtn);
buttons.appendChild(completeBtn);
buttons.appendChild(deleteBtn);

li.appendChild(buttons);

// and then this button to our task
document.getElementById("task-list").appendChild(li);
input.value = "";

// this is for undo button
function addTaskBack(text) {
    let input = document.getElementById("task-input");
    input.value = text;
    addTask();
}
