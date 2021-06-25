const addBtn = document.getElementById("addBtn");

const listContainer = document.getElementById("listContainer");

let listArr = document.querySelectorAll("li");
let inTask = document.getElementById("newTask");

// body.addEventListener('load', (ev) => {})
// alert("hello there! how are you");

//to add cross button to list Items
for (i = 0; i < listArr.length; i++) {
    let delBtn = document.createElement("div");
    let text = document.createTextNode("X");
    let editBtn = document.createElement("div");
    editBtn.innerHTML = "&#128736;";
    // editBtn.appendChild(editSymb);
    delBtn.appendChild(text);
    delBtn.classList.add("delBtn");
    editBtn.classList.add("editBtn");
    listArr[i].appendChild(delBtn);
    listArr[i].appendChild(editBtn);
}

// enter to add item
inTask.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        appendItem();
    }
});

//adding new items to list
function appendItem() {
    //grabbing the new task from the user
    // console.log(newTask)
    const newTask = inTask.value;
    if (newTask == "") {
        alert("enter task");
    } else {
        // adding new task
        let li = document.createElement("LI");
        li.append(newTask);
        // adding del button to each task
        let delBtn = document.createElement("div");
        let text = document.createTextNode("X");
        delBtn.appendChild(text);
        delBtn.classList.add("delBtn");
        li.appendChild(delBtn);
        //adding edit button to each task
        let editBtn = document.createElement("div");
        editBtn.innerHTML = "&#128736;";
        editBtn.classList.add("editBtn");
        li.appendChild(editBtn);
        // finally appending the new task to the lists
        listContainer.appendChild(li);
        //adding delete event to new task
        delBtn.addEventListener("click", (ev) => {
            console.log("hi");
            console.log(ev.target.parentNode.remove());
        });
        //adding edit event to new task
        editBtn.addEventListener("click", (ev) => {
            console.log("hi");
            console.log(ev.target.parentNode.childNodes[0].nodeValue);
        });
        // clearing the new Task input
        inTask.value = "";
    }
}

//delete a list-Item  from the list
let delBtn = document.getElementsByClassName("delBtn");
let editBtn = document.getElementsByClassName("editBtn");
let delArr = Array.from(delBtn);
let editArr = Array.from(editBtn);
delArr.forEach((item, ind, arr) =>
    item.addEventListener("click", (ev) => {
        console.log(ev.target.parentNode.remove());
    })
);
editArr.forEach((item, ind, arr) =>
    item.addEventListener("click", (ev) => {
        // add edit functions

        //grabbed the task in string
        console.log(ev.target.parentNode.childNodes[0].nodeValue);
    })
);

// store in Local storage
function setStorageItem(key, value) {
    localStorage.setItem(key, value);
}