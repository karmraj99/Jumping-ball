const box = document.querySelector(`.box`);
const ball = document.querySelector(`.ball`);

let leftRight = Math.floor(Math.random()*2);
let topBottom = Math.floor(Math.random()*2);

let ballMovingRight = leftRight?true:false;
let ballMovingBottom = topBottom?true:false;

let speed = 1;

function ballMoving(){setInterval( ()=>{
    let boxPosition = box.getBoundingClientRect();
    let ballPosition = ball.getBoundingClientRect();

    let ballPositionTop = Math.floor(ballPosition.top);
    let ballPositionBottom = Math.floor(ballPosition.bottom);
    let ballPositionLeft = Math.floor(ballPosition.left);
    let ballPositionRight = Math.floor(ballPosition.right);

    //-----------ball movement
    if(ballMovingRight && ballMovingBottom){
        ball.style.top = ballPositionTop + speed + `px`;
        ball.style.left = ballPositionLeft + speed + `px`;
    };
    if(ballMovingRight && !ballMovingBottom){
        ball.style.top = ballPositionTop - speed +`px`;
        ball.style.left = ballPositionLeft + speed + `px`;
    }
    if(!ballMovingRight && !ballMovingBottom){
        ball.style.top = ballPositionTop - speed +`px`;
        ball.style.left = ballPositionLeft - speed + `px`;
    }
    if(!ballMovingRight && ballMovingBottom){
        ball.style.top = ballPositionTop + speed + `px`;
        ball.style.left = ballPositionLeft - speed + `px`;
    }

    //------------ball bounce back
    if(ballPositionTop <= boxPosition.top){
         ballMovingBottom = true;
    }
    if(ballPositionRight >= boxPosition.right){
        ballMovingRight = false;
    }
    if(ballPositionBottom >= boxPosition.bottom){
        ballMovingBottom =false;
    }
    if(ballPositionLeft <= boxPosition.left){
        ballMovingRight = true;
    }

},1)
}

ballMoving();