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

let totalIncomplete = function(todo) {
    let total = 0;
    todo.forEach(function(item) {
        if (!item.completed) {
            total = total + 1;
        }
    });
    return total;
}

const statusSummary = document.createElement('p');
statusSummary.textContent = `Total incomplete item = ${totalIncomplete(todo)}`;
document.querySelector('body').appendChild(statusSummary);

let addItems = function(todo) {
    todo.forEach(function(item, index) {
        const p = document.createElement('p');
        p.textContent = `${index + 1}) ${item.text}`;
        document.querySelector('body').appendChild(p);
    })
}

addItems(todo);

document.querySelector('button').addEventListener('click', function(e) {
    console.log("Added an item....")
})