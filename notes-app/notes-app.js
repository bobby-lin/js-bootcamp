const notes = [{
    title: 'My next trip',
    body: 'New Zealand'
}, {
    title: 'Habbits to work on',
    body: 'Focus'
}, {
    title: 'Office Modification',
    body: ' Buy better monitor'
}]

const filterText = {
    searchText: ""
}

let renderNotes = function(notes, filterText) {

    // Filter out the notes based on the filter text
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filterText.searchText.toLowerCase());
    })

    document.querySelector('#notes-list').innerHTML = "" // Clear all the notes in this div
    
    filteredNotes.forEach(function(item) {
        const note = document.createElement('p');
        note.setAttribute("class", "note");
        note.textContent = item.title;
        document.querySelector('#notes-list').appendChild(note);
    })
}

renderNotes(notes, filterText)

// Listens for a search query from user
document.querySelector('#note-text').addEventListener('input', function(e) {
    filterText.searchText = e.target.value;
    renderNotes(notes, filterText);
})

// Listens for a new item being submitted by a user
document.querySelector('#new-notes-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target.elements.notes.value);
    e.target.elements.notes.value = "";
})

document.querySelector("#filter-by").addEventListener('change', function(e) {
    console.log(e.target.value);
})