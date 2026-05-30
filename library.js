const myLibrary = [
  {
    id: crypto.randomUUID(),
    title: "Prisoner",
    author: "Olid",
    num_pages: 130,
    read: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Prisoner",
    author: "Olid",
    num_pages: 130,
    read: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Prisoner",
    author: "Olid",
    num_pages: 130,
    read: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Prisoner",
    author: "Olid",
    num_pages: 130,
    read: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Prisoner",
    author: "Olid",
    num_pages: 130,
    read: false,
  },
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
  displayLibrary();
}

function deleteBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  console.log(index);
  if (index != -1) {
    myLibrary.splice(index, 1);
  }
  displayLibrary();
}

function changeStatus(id) {
    const index = myLibrary.findIndex((book) => book.id === id);
    if (index != -1){
        myLibrary[index].read = !myLibrary[index].read;
    }
    displayLibrary();
}

let book1 = new Book("Potter", "Olid", 256, true);
addToLibrary(book1);

// console.log(myLibrary);

function displayLibrary() {
  const display = document.querySelector(".display-area");
  display.replaceChildren();

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
    const delete_book = document.createElement("div");
    delete_book.classList.add("delete-book");
    card_header.appendChild(delete_book);
    const delete_btn = document.createElement("button");
    delete_btn.classList.add("delete-btn");
    delete_btn.setAttribute("data-id", book.id);
    delete_book.appendChild(delete_btn);
    delete_btn.textContent = "delete";
    const card_author = document.createElement("div");
    card_author.classList.add("card-author");
    card_header.appendChild(card_author);
    card_author.textContent = " written by " + book.author;
    const card_footer = document.createElement("div");
    card_footer.classList.add("card-footer");
    card.appendChild(card_footer);
    const num_pages = document.createElement("div");
    num_pages.classList.add("num-pages");
    card_footer.appendChild(num_pages);
    num_pages.textContent = book.num_pages + " pages";
    const read = document.createElement("div");
    read.classList.add("read");
    card_footer.appendChild(read);
    const read_button = document.createElement("button");
    read_button.classList.add(book.read ? "read-btn" : "unread-btn");
    read_button.setAttribute("data-id", book.id);
    read.appendChild(read_button);
    read_button.textContent = book.read ? "read" : "unread";
  }

  const delete_btns = document.querySelectorAll(".delete-btn");

  for (delete_btn of delete_btns) {
    delete_btn.addEventListener("click", (e) => {
      const book_id = e.target.getAttribute("data-id");
      console.log(book_id);
      deleteBook(book_id);
    });
  }

  const read_btns = document.querySelectorAll(".read-btn, .unread-btn");

  for (read_btn of read_btns) {
    read_btn.addEventListener("click", (e) => {
      const book_id = e.target.getAttribute("data-id");
      console.log(book_id);
      changeStatus(book_id);
    });
  }
}

displayLibrary();

const showModalBtn = document.querySelector(".new-book-btn");
showModalBtn.addEventListener("click", () => {
  document.getElementById("new-book-modal").showModal();
});

const new_book_form = document.getElementById("new-book-form");
new_book_form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.submitter.value);
  if (event.submitter.value === "submit") {
    console.log("hello");
    addToLibrary(
      new Book(
        new_book_form.elements["title"].value,
        new_book_form.elements["author"].value,
        new_book_form.elements["num_pages"].value,
        false,
      ),
    );
  }

  new_book_form.reset();
  document.getElementById("new-book-modal").close();
});
