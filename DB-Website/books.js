/*
Problem 2:  For each employee, create a Modal card where the text of the card has the employee id, first and last name. As the Modal content, include the city and the flag of the city.
*/

// Ensure Lesson_51_DBserver replit is running and is Public!
let books, info;

async function init(){
  let link = "https://friendly-engine-jj75vrq4g6662544p-8500.app.github.dev"; //replace with your Dev URL
  let route= "/books";

  info = await fetch(link+route);
  books = await info.json();

  generateCards(books);
}


function generateCards(books){
  let mainpanel = document.getElementById("centerpanel");
  mainpanel.innerHTML = ""; // clear existing cards

  for(let i = 0; i < books.length; i++){
    let book = books[i];

    let front = `
      <h3>${book.Title}</h3>
      <img src="Booksies/${book.Title}.jpg" width="200">
    `;

    let back = `
      <h3>${book.Title}</h3>
      <p>Release Year: ${book.ReleaseYear}</p>
      <p>Author: ${book.Author}</p>
      <p>Franchise: ${book.Franchise}</p>
    `;

    let card = new FlipCard(front, back);
    card.render("centerpanel");
  }
}


function filter(){
  let title = document.getElementById("booksi").value;

  let newBooks = []; //create a list of employee info

  for(let i=0; i<books.length;i++){
    let book = books[i] //get each employee's info
    
    if( book.Franchise == title ) {
          //add to the new list
          newBooks.push(book);
       }
  }
  console.log(`number found ${newBooks.length}`)
  generateCards(newBooks);
}
