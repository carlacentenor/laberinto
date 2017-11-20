
var container = document.getElementById('container');
var ctx = container.getContext('2d');
var paddleX = 10;
var rightPressed = false;
var leftPressed = false;
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

function drawplayer() {
    ctx.beginPath();
    ctx.rect(paddleX, 80, 10, 10);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

function drawlaberinto() {
    /*ctx.clearRect(0, 0, 180, 110);*/
    draw();
    drawplayer();

    if (rightPressed) {
        paddleX += 10;
    }
    else if (leftPressed) {
        paddleX -= 10;
    }

    x += 10;
    y += 10;
}

setInterval(draw, 50);




document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
