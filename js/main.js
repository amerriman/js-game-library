var Game = function(title, type){
  this.title = title;
  this.type = type;
};


Game.prototype.render = function(){
  var game = new Game(title, type);
};



var GameLibrary = function(type){
  //title of library (like "video games, etc")
  this.type = type;
  //array of all the Game instances that match the library title
  this.games = [];
};

// GameLibrary.prototype.render = function(){

// };


Game.prototype.organize = function(libraries){
  //var toUse;
  for (var i = 0; i < libraries.length; i++) {
    if(this.type === libraries[i].type){
      libraries[i].games.push(this);
      //libraries[i].games = toUse;
    }
  }
};

function findLibrary(tempValue){
  if(tempLibrary === "videoGames"){
    //append video games to the DOM
    $("#all-games").append('<h4>Video Games</h4>');
     //loop through the GameLibrary.games array and append position[0].title, then position[1].title
    for (var i = 0; i < videoGames.games.length; i++) {
      $("#all-games").append('<p> Title:' + videoGames.games[i].title + '</p>');
    }
  }
  else if(tempLibrary === "boardGames"){
    $("#all-games").append('<h4>Board Games</h4>');
    for (var j = 0; j < boardGames.games.length; j++) {
      $("#all-games").append('<p> Title:' + boardGames.games[j].title + '</p>');
    }
  }
  else{
    $("#all-games").append('<h4>Drinking Games</h4>');
    for (var k = 0; k < drinkingGames.games.length; k++) {
      $("#all-games").append('<p> Title:' + drinkingGames.games[k].title + '</p>');
    }
  }
}

//GAME LIBRARY STUFF
var videoGames = new GameLibrary("Video Games");
var boardGames = new GameLibrary("Board Games");
var drinkingGames = new GameLibrary("Drinking Games");
var libraries = [videoGames, boardGames, drinkingGames];

//INDIVIDUAL GAMES STUFF
var marioCart = new Game("Mario Cart", "Video Games");
// var mC = marioCart.render();

//console.log(marioCart.organize(libraries));
var temp = new Game();
var tempLibrary;

$(document).on('ready', function() {

  $('form').not("#show-library").on('submit', function(event){
    event.preventDefault();
    var titleInput = $('#gameinput').val();
    var gameType = $('#gametypes').val();

    var game = new Game(titleInput, gameType);
    temp = game;
    temp.organize(libraries);
    $(".game-input").val("");
    $("#all-games").html("");

    $("#new-games").append('<p> Game Created - Title: ' + temp.title + ' Type: ' + temp.type + '</p>');

  });

  $("#show-library").on('submit', function(event){
    event.preventDefault();
    var libraryType = $('#librarytypes').val();
    tempLibrary = libraryType;
    //console.log("woot");
    $("#all-games").html("");
    findLibrary(tempLibrary);


  });

});
