const readline = require('readline');

class Book {
  constructor(title, author, publicationYear, availableStatus) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.availableStatus = availableStatus;
  }

  newBook() {
    return console.log(
      `Book: ${this.title}, ${this.author}, ${this.publicationYear}, ${this.availableStatus}`
    );
  }
}

function addNewBooks() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`Title: `, (title) => {
    rl.question(`Author: `, (author) => {
      rl.question(`Publication Year: `, (publicationYear) => {
        rl.question(`status: `, (availableStatus) => {
          let bookSave = new Book(
            title,
            author,
            publicationYear,
            availableStatus
          );
          bookSave.newBook();
          rl.close();
        });
      });
    });
  });
}

addNewBooks();
