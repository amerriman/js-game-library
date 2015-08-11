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

$(document).on('ready', function() {

  $('form').on('submit', function(event){
    event.preventDefault();
    var titleInput = $('#gameinput').val();
    var gameType = $('#gametypes').val();

    var game = new Game(titleInput, gameType);
    temp = game;
    temp.organize(libraries);
    $(".form-input").val("");


  //$('body').append(titleInput + "  " + gType);
  $('body').append('<p> Game Created - Title: ' + temp.title + ' Type: ' + temp.type + '</p>');
  //$('body').append('<p>lalala '+ temp.title' </p>');
    //console.log(titleInput);
  });

});
