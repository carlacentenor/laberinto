
var container = document.getElementById('container');
var ctx = container.getContext('2d');
var paddleX = 10;
var paddleY =10;
var rightPressed = false;
var leftPressed = false;
var up =false;
var down =false;
var posX = 0;
var posY = 0;
var mazeMap = [
    "******************",
    "*_________*______*",
    "*_*****_____******",
    "*______***__*__*_*",
    "***_*____*____**_*",
    "*___*____**__*___*",
    "*_********__**_*_*",
    "*____*______*__*_*",
    "*_**_*__*****_**_*",
    "*o*__*________**W*",
    "******************"
];

function drawLaberinto(){
    ctx.beginPath();
       
    // Draw walls
    
    ctx.fillStyle='#0f0';
ctx.fillRect(0,0,180,10);//1ra fila
ctx.fillRect(0,10,10,100);
ctx.fillRect(0,100,180,10);
ctx.fillRect(170,0,10,110);
ctx.fillRect(100,10,10,10);
  //2da fila
ctx.fillRect(20,20,50,10);
ctx.fillRect(120,20,50,10);
ctx.fillRect(70,30,30,10);
 //3ra fila
  ctx.fillRect(120,30,10,10);
ctx.fillRect(150,30,10,10);
  //4ta fila
  ctx.fillRect(10,40,20,10);
  ctx.fillRect(40,40,10,10);
  ctx.fillRect(90,40,10,10);
  ctx.fillRect(140,40,20,10);
        //5ta fila
  ctx.fillRect(40,50,10,10);
  ctx.fillRect(90,50,20,10);
  ctx.fillRect(130,50,10,10);
  //6ta fila
  ctx.fillRect(20,60,80,10);
  ctx.fillRect(120,60,20,10);
  ctx.fillRect(150,60,10,10);
  //7ma fila
  ctx.fillRect(50,70,10,10);
  ctx.fillRect(120,70,10,10);
  ctx.fillRect(150,70,10,10);
  //fila 8
  ctx.fillRect(20,80,20,10);
  ctx.fillRect(50,80,10,10);
  ctx.fillRect(80,80,50,10);
  ctx.fillRect(140,80,20,10);
  //fil a9
  ctx.fillRect(20,90,10,10);
  ctx.fillRect(50,90,10,10);
  ctx.fillRect(140,90,20,10);
  
    ctx.closePath();
}


/*
function draw() {
    for (var i = 0; i < mazeMap.length; i++) {
        for (var j = 0; j < mazeMap[i].length; j++) {
            if (mazeMap[i][j] === '*') {
                ctx.fillStyle = 'blue';
                ctx.fillRect(posX, posY, 10, 10);
            }
            if (mazeMap[i][j] === '_') {
                ctx.fillStyle = 'white';
                ctx.fillRect(posX, posY, 10, 10);
            }
            if (mazeMap[i][j] == 'o') {
                ctx.fillStyle = 'yellow';
                ctx.fillRect(posX, posY, 10, 10);
            }
            if (mazeMap[i][j] == 'W') {
                ctx.fillStyle = 'green';
                ctx.fillRect(posX, posY, 10, 10);
            }

            posX += 10;
        }
        posX = 0;
        posY += 10;
    }

}
*/
function drawplayer() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, 10, 10);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
/*Funcion de tecla PRESIONADA*/
function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }

    else if(e.keyCode == 38){
        up =true;
    }

    else if(e.keyCode ==40){
        down =true;
    }
}
/*Funcion de tecla soltada*/
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }

    else if(e.keyCode == 38){
        up =false;
    }

    else if(e.keyCode ==40){
        down =false;
    }
}

function game() {
    ctx.clearRect(0, 0, 180, 110);
    drawLaberinto();
    drawplayer();
/*Movimiento de jugador */
    if (rightPressed) {
        paddleX += 10;
    }
    else if (leftPressed) {
        paddleX -= 10;
    }
    else if (up) {
        paddleY -= 10;
    }
    else if(down){
        paddleY +=10;
    }
     
}

setInterval(game, 50);




document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
