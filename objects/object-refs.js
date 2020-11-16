let curBook = {
    title: "Games of Throne",
    author: "George Martin"
}

let updateTitle = function(book, newTitle) {
    book.title = newTitle; // The book object properties is binded to curBook properties
    console.log(book);
}

updateTitle(curBook, "The Winds of Winter");
console.log(curBook); // The title will change because the function is updating the title
