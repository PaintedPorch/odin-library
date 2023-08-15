const shelf = document.getElementById("shelf"); // container for books
const bookBtn = document.getElementById("addbook");

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
                    
    shelf.appendChild(item);

    index++;
}

bookBtn.addEventListener("click", addBookToLibrary);