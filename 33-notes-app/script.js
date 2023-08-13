const noteBtn = document.getElementById("add-btn");
const noteTitle = document.getElementById("add-title");
const noteText = document.getElementById("add-text");
const clear = document.querySelector(".clear");

function getNotes() {
  let notes = localStorage.getItem("notes")
}