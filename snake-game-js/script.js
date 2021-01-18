let ctx = document.getElementById('ctx').getContext('2d');
let WIDTH = 500;
let HEIGHT = 500;
let snakeList,
    foodList,
    direction;
    ctx.font = "20px Calibri";

let snakeBody = {
    width: 20,
    height: 20,
    color: 'green'
};

let food = {
    width: 20,
    height: 20,
    color: 'red'
};

document.onkeydown = function(event) {
     if (event.keyCode == 37) {
         direction = 0;
         console.log('0');
     }
     else if (event.keyCode == 38) {
        direction = 1;
        console.log('1');
    }
    else if (event.keyCode == 39) {
        direction = 2;
        console.log('2');
    }
    else if (event.keyCode == 40) {
        direction = 3;
        console.log('3');
    }
}

drawSnake = function (sb, i) {
    ctx.save();
    if (i == 0) {
        ctx.fillStyle = 'black';
    }else{ 
        ctx.fillStyle = snakeBody.color;
    }
    ctx.fillRect(sb.x, sb.y, snakeBody.width, snakeBody.height);
    ctx.restore();
}

drawFood = function(f, i) {
    ctx.save();
    ctx.fillStyle = food.color;
    ctx.fillRect(f.x, f.y, food.width, food.height);
    ctx.restore();
}

updateSnakeList = function() {
    for (var i = snakeList.length-1; i >= 0; i--) {
        if (direction == 0) {
            if (i == 0) {
                snakeList[i].x = snakeList[i].x - 5;
            }else {
                snakeList[i].x = snakeList[i-1].x;
                snakeList[i].y = snakeList[i-1].y;
            }

        }else if (direction == 1) {
            if (i == 0) {
                snakeList[i].y = snakeList[i].y - 5;
            }else {
                snakeList[i].x = snakeList[i-1].x;
                snakeList[i].y = snakeList[i-1].y;
            }
        }else if (direction == 2) {
            if (i == 0) {
                snakeList[i].x = snakeList[i].x + 5;
            }else {
                snakeList[i].x = snakeList[i-1].x;
                snakeList[i].y = snakeList[i-1].y;
            }
        }else if (direction == 3) {
            if (i == 0) {
                snakeList[i].y = snakeList[i].y + 5;
            }else {
                snakeList[i].x = snakeList[i-1].x;
                snakeList[i].y = snakeList[i-1].y;
            }
        }
    }
}

checkSnakePosition = function() {
    if(snakeList[0].x > 500) {
        snakeList[0].x = 0;
    }else if(snakeList[0].x < 0) {
        snakeList[0].x = 500;
    }else if(snakeList[0].y > 500) {
        snakeList[0].y = 0;
    }else if(snakeList[0].y < 0) {
        snakeList[0].y = 500;
    }
}

updateSnakePosition = function() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    while(eaten) {
        let pos_x = Math.random()*485 +5;
        let pos_y = Math.random()*485 +5;
    }
    snakeList.forEach(drawSnake);
    checkSnakePosition();
    updateSnakeList();
}

startGame = function () {
    snakeList = [
        {x: 220, y: 200},
        {x: 210, y: 200},
        {x: 200, y: 200}
    ];
    foodList = [];
    direction = 99;
    eaten = false;
    setInterval(updateSnakePosition, 30);
}

startGame();