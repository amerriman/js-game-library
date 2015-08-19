// *** OOP constructors and methods *** //


///Game Class///
var Game = function(title, type){
  this.title = title;
  this.type = type;
};

///Game Methods///

//Creating new game// - possibly refactor
// Game.prototype.render = function(){
//   var game = new Game(title, type);
// };

//Push game into appropriate library array//
Game.prototype.organize = function(libraries){
  for (var i = 0; i < libraries.length; i++) {
    if(this.type === libraries[i].type){
      libraries[i].games.push(this);
    }
  }
};

///Game Library Class
var GameLibrary = function(type){
  this.type = type;
  this.games = [];
};
