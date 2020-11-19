'use strict'
// const public = true; -> This will have syntax error in strict mode because public is a reserved keyword in JS
// Also it ensures that the variables are declared first.
// strict mode helps to display possible errors

const getSavedNotes = () => {
    let todoJSON = localStorage.getItem('todos');
    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (error) {
        console.log(error.message);
        return [];
    }
}

// Save todos in local storage
const saveTodo = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

const updateTodo = (id, checkedVal) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {
        todos[todoIndex].completed = checkedVal;
    }
}

const generateNoteDOM = (todo) => {
    const todoEl = document.createElement('div');

    // Create checkbox
    const checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("change", (e) => {
        updateTodo(todo.id, e.target.checked);
        saveTodo(todos);
        renderToDo(todos, filters);
    });
    if (todo.completed) {
        checkbox.checked = true;
    }
    todoEl.appendChild(checkbox);

    // Create text element with span
    const text = document.createElement('span');
    text.setAttribute("class", "todo")
    if (todo.text.length) {
        text.textContent = `${todo.text}`;
        // If you use innerHTML, then there is a risk of DOM-XSS issue.
        // text.innerHTML = `${todo.text}`;
    } else {
        text.textContent = "Unnamed todo";
    }
    text.setAttribute("name", '')
    todoEl.appendChild(text);

    // Create a button
    const button = document.createElement('button');
    button.textContent = "X";
    button.addEventListener("click", (e) => {
        removeTodo(todo.id);
        saveTodo(todos);
        renderToDo(todos, filters);
    })
    todoEl.appendChild(button);
    
    return todoEl;
}

const generateSummaryDOM = (incompleteTodo) => {
    const statusSummary = document.createElement('h2');
    statusSummary.textContent = `Total incomplete item = ${incompleteTodo.length}`;
    return statusSummary;
}

const renderToDo = (todos, filters) => {
    const filteredToDos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()));

    // Filter out the incomplete todo items
    const incompleteTodo = todos.filter((todo) => !todo.completed);

    // Empyt the current todo list first
    document.querySelector("#todo-list").innerHTML = "";
    document.querySelector('#summary').innerHTML = "";

    const statusSummary = generateSummaryDOM(incompleteTodo);
    document.querySelector('#summary').appendChild(statusSummary);
    
    if (filters.hideCompleted) {
        incompleteTodo.forEach((todo) => {
            const el = generateNoteDOM(todo);
            document.querySelector('#todo-list').appendChild(el);
        })

    } else {
        filteredToDos.forEach((todo) => {
            const el = generateNoteDOM(todo);
            document.querySelector('#todo-list').appendChild(el);
        })
    }
}