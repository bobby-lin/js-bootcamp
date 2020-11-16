const todo = [
    {
        text: "Eat dinner",
        completed: false
    },
    {
        text: "Exercise for 1 hour",
        completed: false
    },
    {
        text: "Read a book",
        completed: true
    },
    {
        text: "Coding for 3 hours",
        completed: true
    },
    {
        text: "Take a nap",
        completed: false
    },
]

let deleteTodo = function(todo, itemText) {
    let index = todo.findIndex(function(item) {
        return item.text.toLowerCase() === itemText.toLowerCase();
    });

    if (index != -1) {
        todo.splice(index, 1);
    }
}

deleteTodo(todo, "eat dinner");
console.log(todo);
deleteTodo(todo, "Nothing");
console.log(todo);

let getThingsToDo = function(todo) {
    let uncompleted_todo = todo.filter(function(item) {
        return item.completed === false
    })
    return uncompleted_todo;
}

console.log(getThingsToDo(todo));

let sortByCompletion = function(todo) {
    let sortedToDo = todo.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return 1;
        } else if (a.completed && !b.completed) {
            return -1;
        } else {
            return 0;
        }
    })

    return sortedToDo;
}

console.log(sortByCompletion(todo));