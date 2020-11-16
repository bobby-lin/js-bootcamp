const todo = ['Water plant', 'Change Diapers', 'Feed Kiddo', 'Running', 'Coding']

let getToDoCount = function(todo) {
    return `You have ${todo.length} todo item(s)!`
}

todo.splice(2, 1)
todo.push("Drink Tea")
todo.shift()

// This is a callback function -> Passing a function to a function
todo.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`);
})

console.log("For Loop:")
for (let i = 0; i < todo.length; i++) {
    console.log(`${i + 1}. ${todo[i]}`);
}