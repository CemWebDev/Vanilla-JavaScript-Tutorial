//! Basic to do list example without css.

const addTaskButton = document.querySelector(".add-task");

function addTask() {
  const taskInput = document.querySelector("#task-input");
  const taskList = document.querySelector(".task-list");
  if (taskInput.value.trim() === "") {
    alert("Please enter a task");
    return;
  }
  let taskItem = document.createElement("li");
  taskItem.textContent = taskInput.value;
  taskList.appendChild(taskItem);
  taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);
