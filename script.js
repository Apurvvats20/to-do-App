const taskItems = document.querySelectorAll(".task-items-groups");
const modalwork = document.querySelector(".Work");
const modalPersonal = document.querySelector(".Personal");
const modalLife = document.querySelector(".Life");
const modalPlaces = document.querySelector(".Places");
const mainContainer = document.querySelector("#main_container");
const addTaskButton = document.querySelectorAll(".add_task_button");
const taskContent = document.querySelector(".task-content");

taskItems.forEach(function (taskItem) {
  taskItem.addEventListener("click", function (e) {
    if (e.target.classList.contains("work")) {
      modalwork.classList.remove("hidden");
      mainContainer.style.display = "none";
    } else if (e.target.classList.contains("personal")) {
      modalPersonal.classList.remove("hidden");
      mainContainer.style.display = "none";
    } else if (e.target.classList.contains("life")) {
      modalLife.classList.remove("hidden");
      mainContainer.style.display = "none";
    } else if (e.target.classList.contains("places")) {
      modalPlaces.classList.remove("hidden");
      mainContainer.style.display = "none";
    }
  });
});

window.addEventListener("click", function (e) {
  if (e.target.getAttribute("lang") === "en" || e.target === document.body) {
    modalwork.classList.add("hidden");
    modalPersonal.classList.add("hidden");
    modalLife.classList.add("hidden");
    modalPlaces.classList.add("hidden");
    modalPersonal.classList.add("remove");
    mainContainer.style.display = "";
  }
});

addTaskButton.forEach(function (addbutton) {
  addbutton.addEventListener("click", function () {
    const newtask = prompt("Please Enter your task");
    const parentElement = addbutton.parentNode.childNodes[3];
    const newElement = document.createElement("div");
    newElement.classList.add("modal-task-item");
    const newTaskItem = document.createElement("div");
    newTaskItem.textContent = newtask;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    newElement.appendChild(newTaskItem);
    newElement.appendChild(deleteButton);
    parentElement.appendChild(newElement);
  });
});
