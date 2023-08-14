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

  getNotes();

  let myObj = {
    title: noteTitle.value,
    text: noteText.value,
  }

  notesObj.push(myObj);

  localStorage.setItem("notes", JSON.stringify(notesObj))

  document.querySelector("form").reset();

  showNotes();
});


function showNotes() {
  getNotes();
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="note">
        <div class="note-cta">
          <p class="note-counter">Note ${index + 1}</p>
          <div class="note-cta-btn">
            <button id="${index}" onclick="deleteNote(this.id)" class="note-btn">
              <i class="fas fa-trash"></i> Delete
            </button>
            <button id="${index}" onclick="editNote(this.id)" class="note-btn edit-btn">
              <i class="fas fa-edit"></i> Edit
            </button>
          </div>
        </div>
        <hr />
        <h3 class="note-title">Title: ${element.title}</h3>
        <p class="note-text">${element.text}</p>
      </div>
        `;
  });
  let noteElm = document.getElementById("notes");

  if (notesObj.length != 0) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = "No notes added, Please add a note";
  }
}

function deleteNote(index) {
  let confirmDel = confirm("Delete this note?")

  if (confirmDel == true) {
    getNotes();
    notesObj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
  }
}