const myLibrary = [
    {title: 'Prisoner', author: 'Olid', num_pages: 130, read: false},
    {title: 'Prisoner', author: 'Olid', num_pages: 130, read: false},
    {title: 'Prisoner', author: 'Olid', num_pages: 130, read: false},
    {title: 'Prisoner', author: 'Olid', num_pages: 130, read: false},
    {title: 'Prisoner', author: 'Olid', num_pages: 130, read: false}
];

function Book(title, author, num_pages, read) {
  if (!new.target) {
    throw Error("You need to use 'new' to call the constructor!");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.num_pages = num_pages;
  this.read = read;
}

function addToLibrary(book) {
  myLibrary.push(book);
}

let book1 = new Book("Potter", "Olid", 256, true);
addToLibrary(book1);

console.log(myLibrary);

function displayLibrary() {
  const display = document.querySelector(".display-area");

  for (book of myLibrary) {
    const card = document.createElement("div");
    card.classList.add("card");
    display.appendChild(card);
    const card_header = document.createElement("div");
    card_header.classList.add("card-header");
    card.appendChild(card_header);
    const card_title = document.createElement("div");
    card_title.classList.add("card-title");
    card_header.appendChild(card_title);
    card_title.textContent = book.title;
    const card_author = document.createElement("div");
    card_author.classList.add("card-author");
    card_header.appendChild(card_author);
    card_author.textContent = ' - written by ' + book.author;
    const card_footer = document.createElement("div");
    card_footer.classList.add("card-footer");
    card.appendChild(card_footer);
    const num_pages = document.createElement("div");
    num_pages.classList.add("num-pages");
    card_footer.appendChild(num_pages);
    num_pages.textContent = book.num_pages + ' pages';
    const read = document.createElement("div");
    read.classList.add("read");
    card_footer.appendChild(read);
    read.textContent = book.read ? "read" : "unread";
  }
}

displayLibrary()
