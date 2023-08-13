const noteBtn = document.getElementById("add-btn");
const noteTitle = document.getElementById("note-title");
const noteText = document.getElementById("note-text");
const clear = document.querySelector(".clear");

function getNotes() {
  let notes = localStorage.getItem("notes")

  if (notes == null) {
    notesObj = []
  } else {
    notesObj = JSON.parse(notes)
  }
}

noteBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (noteTitle.value == "" || noteText.value == "") {
    return alert("Please add Note Title and Details")
  }
})