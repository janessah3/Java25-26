/*
Problem 2:  For each employee, create a Modal card where the text of the card has the employee id, first and last name. As the Modal content, include the city and the flag of the city.
*/

// Ensure Lesson_51_DBserver replit is running and is Public!
let games, info;

async function init(){
  let link = "https://friendly-engine-jj75vrq4g6662544p-8500.app.github.dev"; //replace with your Dev URL
  let route= "/games";

  info = await fetch(link+route);
  games = await info.json();

  generateCards(games);
}


function generateCards(games){
  let mainpanel = document.getElementById("centerpanel");
  mainpanel.innerHTML = ""; // clear existing cards

  for(let i = 0; i < games.length; i++){
    let game = games[i];

    let front = `
      <h3>${game.Title}</h3>
      <img src="Games/${game.Title}.jpg" width="200">
    `;

    let back = `
      <h3>${game.Title}</h3>
      <p>Release Year: ${game.ReleaseYear}</p>
      <p>Publisher: ${game.Publisher}</p>
      <p>Franchise: ${game.Franchise}</p>
    `;

    let card = new FlipCard(front, back);
    card.render("centerpanel");
  }
}


function filter(){
  let title = document.getElementById("game").value;

  let newGames = []; //create a list of employee info

  for(let i=0; i<games.length;i++){
    let game = games[i] //get each employee's info
    
    if( game.Franchise == title ) {
          //add to the new list
          newGames.push(game);
       }
  }
  console.log(`number found ${newGames.length}`)
  generateCards(newGames);
}
