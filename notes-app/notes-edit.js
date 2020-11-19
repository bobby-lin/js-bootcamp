'use strict'

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const lastUpdateElement = document.querySelector('#last-update-date');
const id = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find((note) => note.id === id);

if(!note) {
    location.assign("/index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body;

lastUpdateElement.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`;

let setUpdateDate = (note) => {
    const now = moment();
    note.updatedAt = now.valueOf();
    lastUpdateElement.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`;
}

// Listen and update the note title
titleElement.addEventListener("input", (e) => {
    note.title = e.target.value;
    setUpdateDate(note)
    saveNote(notes);
})

// Listen and update note body
bodyElement.addEventListener("input", (e) => {
    note.body = e.target.value;
    setUpdateDate(note);
    saveNote(notes);
})

// Listen for remove note button
document.querySelector('#remove-note').addEventListener("click", () => {
    removeNote(id);
    saveNote(notes);
    location.assign("/index.html");
})

// Listen for local storage changes in another tab
window.addEventListener("storage", (e) => {
    console.log(e);
    if(e.key === "notes") {
        console.log(e.newValue);
    }

    notes = JSON.parse(e.newValue);
    saveNote(notes);

    note = notes.find((note) => note.id === id);
    
    if(!note) {
        location.assign("/index.html");
    }
    
    titleElement.value = note.title;
    bodyElement.value = note.body;
    setUpdateDate(note);
})