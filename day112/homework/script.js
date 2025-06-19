const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", () => {
    let input = document.getElementById("task-input");
    let text = input.value.trim();

    // we have unordered list and inside we append li with span text
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);

    // this is for edit complite and remove buttons
    let buttons = document.createElement("div");
    buttons.className = "task-buttons";

    // i did like this because i think it is much easyer like that
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => {
        let newText = prompt("edit task: ", span.innerText);
        span.innerText = newText.trim();
    });

    // with complite we delete everything in list and add into complite
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener("click", () => {
        document.getElementById("task-list").removeChild(li);
        buttons.removeChild(editBtn);
        buttons.removeChild(completeBtn);
        buttons.appendChild(deleteBtn);
        document.getElementById("completed-list").appendChild(li);
    });

    // delete is easy just delete everything
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // we add buttons
    buttons.appendChild(editBtn);
    buttons.appendChild(completeBtn);
    buttons.appendChild(deleteBtn);

    li.appendChild(buttons);

    // and then this button to our task
    document.getElementById("task-list").appendChild(li);
    input.value = "";
});