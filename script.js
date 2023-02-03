const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? 'read' : 'not read yet'
    }`;
  };
}

function addBookToLibrary() {
  const title = prompt('What is the books title?');
  const author = prompt('Who is the author?');
  const pages = prompt('How many pages?');
  const read = prompt('Have you read it? true or false');

  myLibrary.push(new Book(title, author, pages, read));
}

function showBooks() {
  for (let i = 0; i < myLibrary.length; i += 1) {
    const newDiv = document.createElement('div');
    const newTitle = document.createElement('h3');
    const newBy = document.createElement('h4');
    const newAuthor = document.createElement('h3');
    const newPages = document.createElement('h4');
    const newRead = document.createElement('h4');

    newDiv.classList.add('book-card');

    newTitle.textContent = myLibrary[i].title;
    newBy.textContent = 'by';
    newAuthor.textContent = myLibrary[i].author;
    newPages.textContent = `${myLibrary[i].pages} pages`;
    newRead.textContent = myLibrary[i].read ? 'Read' : 'Not read';

    newDiv.append(newTitle, newBy, newAuthor, newPages, newRead);

    document.querySelector('.library-grid').appendChild(newDiv);
  }
}

const lordOfTheRings = new Book('Lord of the Rings', 'Dmitri', 345, false);
myLibrary.push(lordOfTheRings);

// addBookToLibrary();
showBooks();
