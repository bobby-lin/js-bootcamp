'use strict'
let todos = getSavedNotes();

const filters = {
    searchText: "",
    hideCompleted: false
}

renderToDo(todos, filters);

// Listens for a search query from user input
// Every time a user type or remove something in the filter form, the list will be refreshed
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value; // Use .value to get the search text
    renderToDo(todos, filters);
})

// Listens for a new todo submission from user (the event is submit)
document.querySelector('#new-todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = e.target.elements.newTodo.value
    todos.push({
        id: uuidv4(),
        text: newTodo,
        completed: false
    })
    saveTodo(todos);
    renderToDo(todos, filters);
    e.target.elements.newTodo.value = "";
})

// Listens for checkbox changes to hide or unhide incomplete items
// Get the boolean value from the element target
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderToDo(todos, filters);
})
