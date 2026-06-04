/*
Problem 2:  For each employee, create a Modal card where the text of the card has the employee id, first and last name. As the Modal content, include the city and the flag of the city.
*/

// Ensure Lesson_51_DBserver replit is running and is Public!
let movies, info;

async function init(){
  let link = "https://friendly-engine-jj75vrq4g6662544p-8500.app.github.dev"; //replace with your Dev URL
  let route= "/movies";

  info = await fetch(link+route);
  movies = await info.json();

  generateCards(movies);
}


function generateCards(movies){
  let mainpanel = document.getElementById("centerpanel");
  mainpanel.innerHTML = ""; // clear existing cards

  for(let i = 0; i < movies.length; i++){
    let movie = movies[i];

    let front = `
      <h3>${movie.Title}</h3>
      <img src="Movies/${movie.Title}.jpg" width="200">
    `;

    let back = `
      <h3>${movie.Title}</h3>
      <p>Release Year: ${movie.ReleaseYear}</p>
      <p>Studio: ${movie.Studio}</p>
      <p>Franchise: ${movie.Franchise}</p>
    `;

    let card = new FlipCard(front, back);
    card.render("centerpanel");
  }
}


function filter(){
  let franchise = document.getElementById("franchise").value;
  console.log(franchise);

  let newMovies = []; //create a list of employee info

  for(let i=0; i<movies.length;i++){
    let movie = movies[i] //get each employee's info
    
    if( movie.Franchise == franchise ) {
          //add to the new list
          newMovies.push(movie);
       }
  }
  console.log(`number found ${newMovies.length}`)
  generateCards(newMovies);
}
