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
  const title = prompt("What is the books title?");
  const author = prompt("Who is the author?");
  const pages = prompt("How many pages?");
  const read = prompt("Have you read it? true or false");
  
  myLibrary.push(new Book(title, author, pages, read));
}


const lordOfTheRings = new Book('Lotr', 'Dmitri', 345, false);
myLibrary.push(lordOfTheRings);

addBookToLibrary();
