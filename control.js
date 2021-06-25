const addBtn = document.getElementById("addBtn");

const listContainer = document.getElementById("listContainer");

let listArr = document.querySelectorAll("li");
let delArr1 = [];
// console.log(delArr1)
//to add cross button to list Items
for (i = 0; i < listArr.length; i++) {
    let delBtn = document.createElement("div");
    let text = document.createTextNode("X");
    delBtn.appendChild(text);
    delBtn.classList.add("delBtn");
    listArr[i].appendChild(delBtn);
}

let delBtn = document.getElementsByClassName("delBtn");

//adding new items to list
function appendItem() {
    let delBtn = document.createElement("div");
    let text = document.createTextNode("X");
    delBtn.appendChild(text);
    delBtn.classList.add("delBtn");
    let li = document.createElement("LI");
    li.appendChild(delBtn);
    listContainer.appendChild(li);

    delBtn.addEventListener("click", (ev) => {
        console.log("hi");
        console.log(ev.target.parentNode.remove());
    });
}
let delArr = Array.from(delBtn);

delArr.forEach((item, ind, arr) =>
    item.addEventListener("click", (ev) => {
        console.log(ev.target.parentNode.remove());
    })
);