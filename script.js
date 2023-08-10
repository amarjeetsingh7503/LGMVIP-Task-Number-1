document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("input");
    const addButton = document.querySelector("#push");
    const tasksList = document.querySelector("#tasks");
  
    addButton.addEventListener("click", addTask);
    input.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  
    function addTask() {
      const taskText = input.value.trim();
      if (taskText === "") return;
  
      const taskItem = document.createElement("div");
      taskItem.className = "taskItem";
      taskItem.innerHTML = `
        <p id="taskText">${taskText}</p>
        <input id="checkbox" type="checkbox">
        <button class="removeButton">
          <img id="delete" src="./img/delete.png" width="25px" alt="delete">
        </button> 
        `;
      tasksList.appendChild(taskItem);
  
      input.value = "";
  
      const removeButtons = document.querySelectorAll(".removeButton");
      removeButtons.forEach((button) => {
        button.addEventListener("click", function () {
          button.parentElement.remove();
        });
      });
    }
  });
  
  