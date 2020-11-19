'use strict'

let notes = getSavedNotes();

const filterText = {
    searchText: "",
    sort: "byEdited"
}

renderNotes(notes, filterText);

// Listens for a search query from user
document.querySelector('#note-text').addEventListener('input', (e) => {
    filterText.searchText = e.target.value;
    renderNotes(notes, filterText);
});

// Listens for a new item being submitted by a user
document.querySelector('#create-note').addEventListener('click', (e) => {
    e.preventDefault();
    const uuid = uuidv4();
    const now = moment()
    const note = {
        id: uuid,
        title: '',
        body: '',
        createdAt: now.valueOf(),
        updatedAt: now.valueOf()
    };
    notes.push(note);
    saveNote(notes);
    location.replace('/edit.html#' + uuid);
})

// Sorting the list of notes by the selected option
// By default, the value is sorted by last edited
document.querySelector("#sort-by").addEventListener('change', (e) => {
    filterText.sort = e.target.value;
    renderNotes(notes, filterText);
})

// Listens for changes in local storage
window.addEventListener("storage", (e) => {
    if(e.key === "notes") {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filterText);
    }
})