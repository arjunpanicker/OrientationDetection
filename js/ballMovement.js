var ball = document.querySelector(".ball");
var garden = document.querySelector(".garden");
var output = document.querySelector(".output");

var maxX = garden.clientWidth - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {

    // In degree in range [-180, 180]
    var x = event.beta;     
    // In degree in range [-90, 90]
    var y = event.gamma;

    output.innerHTML = "beta: " + x + "\n";
    output.innerHTML += "gamma: " + y + "\n";

    // because we don't want to have the device upside down, 
    // we contrain the x values to the range [-90, 90]
    if( x > 90 ) {
        x = 90
    }
    if( x < -90 ) {
        x = -90;
    }

    // To make computations easier, we shift the range of 
    // x and y to [0, 180]
    x += 90;
    y += 90;

    // 10 is half the size of the ball
    // It center the positioning point to the center of the ball 
    ball.style.top = ( maxX*x/180 - 10 ) + "px";
    ball.style.left = ( maxY*y/180 - 10 ) + "px";

    window.addEventListener('deviceOrientation', handleOrientation);

}