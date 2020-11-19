'use strict'

const getSavedNotes = () => {
    const notesJSON = localStorage.getItem("notes");

    try {
        return notesJSON !== null ? JSON.parse(notesJSON) : [];    
    } catch (error) {
        console.log(error.message);
        return [];   
    }
}

const removeNote = (id) => {
    const noteId = notes.findIndex((note) => note.id === id);

    if(noteId > -1) {
        notes.splice(noteId, 1);
    }
}

const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const buttonEl = document.createElement('button');

    textEl.textContent = note.title;
    textEl.setAttribute("href", `/edit.html#${note.id}`);

    buttonEl.textContent = "X";
    buttonEl.addEventListener("click", (e) => {
        removeNote(note.id);
        saveNote(notes);
        renderNotes(notes, filterText);
    })

    noteEl.appendChild(buttonEl);
    noteEl.appendChild(textEl);
    return noteEl;
}

const saveNote = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
}

const sortNotes = (notes, filterText) => {
    let sortedNotes = notes;
    if(filterText.sort === "byEdited") {
        sortedNotes = notes.sort((a, b) => {
            if(a.updatedAt === b.updatedAt) {
                return 0; // same
            } else if (a.updatedAt > b.updatedAt) {
                return -1; // a is latest
            } else {
                return 1; // b is latest
            }
        })
        
    } else if(filterText.sort === "byRecent") {
        sortedNotes = notes.sort((a, b) => {
            if(a.createdAt > b.createdAt) {
                return -1 // a is more recent than b
            } else if (a.createdAt < b.createdAt) {
                return 1 // b is more recent than a
            } else {
                return 0;
            }
        })
    } else {
        sortedNotes = notes.sort((a, b) => {
            let title1 = a.title.toLowerCase();
            let title2 = b.title.toLowerCase();

            if(title1 > title2) {
                return 1; // title2 should showup first
            } else if(title1 < title2) {
                return -1; // title1 should show up first
            } else {
                return 0;
            }
        })
    }

    return sortedNotes
}

const renderNotes = (notes, filterText) => {
    // Filter out the notes based on the filter text
    let filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filterText.searchText.toLowerCase()));
    filteredNotes = sortNotes(filteredNotes, filterText);

    document.querySelector('#notes-list').innerHTML = "" // Clear all the notes in this div
    
    filteredNotes.forEach(function(item) {
        document.querySelector('#notes-list').appendChild(generateNoteDOM(item));
    })
}