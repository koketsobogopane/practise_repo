import Ball from "./Ball.js";

//for the game to start animating so we will need to implement something called the update loop which is a recurring/repeating  process where we repeatedly update the stae or properties of an application or game at regular interval.

//Creating our ball.
const ball = new Ball(document.getElementById('ball'))

let lastTime;

//Now let's create our updating function(Update loop)
function update(time) {

    if ( lastTime !== null ){
        //we have to keep track of how much difference we have in between these frames so we do that by creating delta
        const delta = time - lastTime
        ball.update(delta)
    }
     
    lastTime = time  
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)

