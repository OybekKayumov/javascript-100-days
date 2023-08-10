const input = document.querySelector("input"),
      btn = document.querySelector("button"),
      todoList = document.querySelector(".todo-list"),
      clear = document.querySelector(".clear");

btn.addEventListener("click", addTask);

function addTask(e) {
  if (input.value !== "") {
    addTaskToLS();

    newLi.textContent = input.value;
    newLi.appendChild(delBtn);
    todoList.appendChild(newLi);
    input.value = "";
 } else {
   alert("Please enter a task");
 }
}

function addTaskToLS() {
  
}