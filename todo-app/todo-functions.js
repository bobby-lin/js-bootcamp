const getSavedNotes = function() {
    let todoJSON = localStorage.getItem('todos');
    if (todoJSON !== null) {
        return JSON.parse(todoJSON);
    } else {
        return [];
    }
}

// Save todos in local storage
const saveTodo = function (todos){
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Remove todo by id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id;
    });

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

const updateTodo = function(id, checkedVal) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id;
    })

    if (todoIndex > -1) {
        todos[todoIndex].completed = checkedVal;
    }
}

const generateNoteDOM = function(todo) {
    const todoEl = document.createElement('div');

    // Create checkbox
    const checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("change", function(e) {
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
    if (todo.text.length > 0) {
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
    button.addEventListener("click", function(e) {
        removeTodo(todo.id);
        saveTodo(todos);
        renderToDo(todos, filters);
    })
    todoEl.appendChild(button);
    
    return todoEl;
}

const generateSummaryDOM = function(incompleteTodo) {
    const statusSummary = document.createElement('h2');
    statusSummary.textContent = `Total incomplete item = ${incompleteTodo.length}`;
    return statusSummary;
}

const renderToDo = function(todos, filters) {
    const filteredToDos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    // Filter out the incomplete todo items
    const incompleteTodo = todos.filter(function(todo) {
        return !todo.completed;
    })

    // Empyt the current todo list first
    document.querySelector("#todo-list").innerHTML = "";
    document.querySelector('#summary').innerHTML = "";

    const statusSummary = generateSummaryDOM(incompleteTodo);
    document.querySelector('#summary').appendChild(statusSummary);
    
    if (filters.hideCompleted) {
        incompleteTodo.forEach(function(todo) {
            const el = generateNoteDOM(todo);
            document.querySelector('#todo-list').appendChild(el);
        })

    } else {
        filteredToDos.forEach(function(todo) {
            const el = generateNoteDOM(todo);
            document.querySelector('#todo-list').appendChild(el);
        })
    }
}