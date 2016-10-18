//Simple function demonstrating the addition of an object to another object.

currentBooks = {
    
    '# of Books': 0
}

function addBook (book,name,writer){
   //Increments the string inside of currentBooks
    book["# of Books"]++;
    //adds the "book" object inside of the "currentBooks" object.
    book["book" + book["# of Books"]] = {title: name, author: writer};
    //uses literal notation to add the "book" object, as well as calling and referencing the "# of books" property and adding that to the "book" object.

}

// name and title of book are added to "book" object.
addBook(currentBooks,"1984","George Orwell");


currentBooks;
