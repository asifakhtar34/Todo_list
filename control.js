  const addBtn = document.getElementById("addBtn");

  const listContainer = document.getElementById("listContainer");

  let listArr = document.querySelectorAll("li");

  // body.addEventListener('load', (ev) => {})
  // alert("hello there! how are you");

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
      //grabbing the new task from the user
      const newTask = document.getElementById("newTask").value;
      // console.log(newTask)
      let delBtn = document.createElement("div");
      let text = document.createTextNode("X");
      delBtn.appendChild(text);
      delBtn.classList.add("delBtn");
      let li = document.createElement("LI");
      li.appendChild(delBtn);
      li.append(newTask)

      listContainer.appendChild(li);

      delBtn.addEventListener("click", (ev) => {
          console.log("hi");
          console.log(ev.target.parentNode.remove());
      });

      q

  }

  //delete a list-Item  from the list
  let delArr = Array.from(delBtn);
  delArr.forEach((item, ind, arr) =>
      item.addEventListener("click", (ev) => {
          console.log(ev.target.parentNode.remove());
      })
  );

  // store in Local storage
  function setStorageItem(key, value) {
      localStorage.setItem(key, value)
  }