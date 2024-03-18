//! Basic to do list example without css.

const addTaskButton = document.querySelector(".add-task");

// Function to add a task when the button is clicked
function addTask() {
  // Get the task input element
  const taskInput = document.querySelector("#task-input");
  // Get the task list element
  const taskList = document.querySelector(".task-list");
  // Check if the task input is empty
  if (taskInput.value.trim() === "") {
    // If the task input is empty, show an alert message
    alert("Please enter a task");
    // Exit the function
    return;
  }
  // Create a new list item element
  let taskItem = document.createElement("li");
  // Set the text content of the list item to the task input value
  taskItem.textContent = taskInput.value;
  // Append the new list item to the task list
  taskList.appendChild(taskItem);
  // Clear the task input
  taskInput.value = "";
}

// Add event listener to the add task button
addTaskButton.addEventListener("click", addTask);
