const shelf = document.getElementById("shelf"); // container for books
const bookBtn = document.getElementById("addbook");
const noBookBtn = document.getElementById("removebook");

let bookArray = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

let index = 0;
let itemList = [];

// Todo: make the book-cover with title visible and upon click, reveal details

function addBookToLibrary() {
    let book = new Book();
    book.title = prompt("Title: ");
    book.author = prompt("Author: ");
    book.pages = prompt("Pages: ");

    bookArray.push(book);

    let item = document.createElement("div");
    item.classList.add("bookcover");
    item.innerHTML = `<p class="booktitle">${bookArray[index].title}</p>
                    <p class="bookauthor">${bookArray[index].author}</p>
                    <p class="bookpages">${bookArray[index].pages} Pages</p>
                    <div class="readcheckdiv">
                        <label class="checklabel" for="readornot">Read:</label>
                        <input type="checkbox" id="readornot">
                    </div>`

    itemList.push(item);
    shelf.appendChild(item);

    index++;
}

bookBtn.addEventListener("click", addBookToLibrary);

//todo: make delete book button, this will delete the item entered in the textbox

function deleteBook() {
    let bookName = prompt("What is the Title of the book: ");

    for (let i = 0; i < itemList.length; i++) {

        let bookTitle = bookArray[i].title;

        if (bookTitle == bookName) {
            let bookDiv = itemList[i];
            bookDiv.remove();
        }
        else 
            continue;
    }
}

noBookBtn.addEventListener("click", deleteBook);