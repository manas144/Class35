var game,form,player
var gameState=0
var playerCount=0
var ball;
var database;
var position;
function setup(){
    createCanvas(500,500);
database=firebase.database()
game=new Game ()
    game.getstate()
    game.start()
}

function draw(){}


function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function writePosition(x,y)
{ database.ref('ball/position').set(
    { 'x': position.x + x , 'y': position.y + y }) }
