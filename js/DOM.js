// *** jQuery DOM Manipulation *** //
//GAME LIBRARY Arrays - for testing purposes
var videoGames = new GameLibrary("Video Games");
var boardGames = new GameLibrary("Board Games");
var drinkingGames = new GameLibrary("Drinking Games");
var libraries = [videoGames, boardGames, drinkingGames];

///helper function to show all games from that library///
function findLibrary(libraryType){

  if(libraryType === "videoGames"){
    $("#game-library-container").append('<h4>Video Games</h4>');
    for (var i = 0; i < videoGames.games.length; i++) {
      $("#game-library-container").append('<p> Title:' + videoGames.games[i].title + '</p>');
    }
  }

  else if(libraryType === "boardGames"){
    $("#game-library-container").append('<h4>Board Games</h4>');
    for (var j = 0; j < boardGames.games.length; j++) {
      $("#game-library-container").append('<p> Title:' + boardGames.games[j].title + '</p>');
    }
  }

  else{
    $("#game-library-container").append('<h4>Drinking Games</h4>');
    for (var k = 0; k < drinkingGames.games.length; k++) {
      $("#game-library-container").append('<p> Title:' + drinkingGames.games[k].title + '</p>');
    }
  }
}




$(document).on('ready', function() {});

//submit new game form//
$('form').not("#show-library").on('submit', function(event){

  event.preventDefault();

  // grab user inputs, then clear inputs
  var titleInput = $('#gameinput').val();
  var gameType = $('#gametypes').val();
  $(".game-input").val("");

  // new instance of game, based on user inputs
  var game = new Game(titleInput, gameType);
  game.organize(libraries);

  $("#game-library-container").html("");
  $("#new-games").append('<p> Game Created - Title: ' + game.title + ' Type: ' + game.type + '</p>');

});

//show contents of game library//
$("#show-library").on('submit', function(event){
  event.preventDefault();
  var libraryType = $('#librarytypes').val();
  $("#game-library-container").html("");
  findLibrary(libraryType);
});
