const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function removeBook() {
  myLibrary.splice(this.dataset.id, 1);
  showBooks();
}

function updateRead() {
  this.textContent === 'Read'
    ? (this.textContent = 'Not read')
    : (this.textContent = 'Read');
}
function showBooks() {
  document.querySelector('.library-grid').innerHTML = '';

  for (let i = 0; i < myLibrary.length; i += 1) {
    const newDiv = document.createElement('div');
    const newTitle = document.createElement('h3');
    const newBy = document.createElement('h4');
    const newAuthor = document.createElement('h3');
    const newPages = document.createElement('h4');
    const newRead = document.createElement('button');
    const newRemove = document.createElement('button');

    newDiv.classList.add('book-card');
    newRemove.dataset.id = i;

    newRemove.addEventListener('click', removeBook);
    newRead.addEventListener('click', updateRead);

    newTitle.textContent = myLibrary[i].title;
    newBy.textContent = 'by';
    newAuthor.textContent = myLibrary[i].author;
    newPages.textContent = `${myLibrary[i].pages} pages`;
    newRead.textContent = myLibrary[i].read === 'true' ? 'Read' : 'Not read';
    newRemove.textContent = 'Remove';

    newDiv.append(newTitle, newBy, newAuthor, newPages, newRead, newRemove);

    document.querySelector('.library-grid').appendChild(newDiv);
  }
}

function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;

  myLibrary.push(new Book(title, author, pages, read));
  showBooks();
}

function showForm() {
  document.querySelector('.form').toggleAttribute('hidden');
  document.querySelector('#submit-btn').toggleAttribute('hidden');
}

document
  .querySelector('#submit-btn')
  .addEventListener('click', addBookToLibrary);

document.querySelector('#new-book-btn').addEventListener('click', showForm);



const lordOfTheRings = new Book('Lord of the Rings', 'Dmitri', 345, false);
myLibrary.push(lordOfTheRings);

showBooks();
