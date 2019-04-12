import Ship from '../object/ship';
import Gate from '../object/pipe';

document.addEventListener('DOMContentLoaded', () => {
    console.log("hello world");
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const ship = new Ship(ctx);
    const gates = [];
    const interval = setInterval(game, 30);
    gates[0] = new Gate(ctx);
    const background = new Image();
    background.src = "../assets/space-background.jpeg"

    // Adds new gate once previous gate reaches 400px.
    // Removes gate once it leaves the bounds of the canvas.
    function checkGate(){
        for (let i = 0; i < gates.length; i++) {
            gates[i].draw();
        };
        if (gates[0].y == 300) {
            gates.push(new Gate(ctx));
        };
        if (gates[0].y == 630) {
            gates.shift();
        }
    }

    // HIT DETECTION
    function hitDetected(){
        if ( isHittingWall() ) {
                alert("GAME OVER");
                document.location.reload();
                clearInterval(interval);
        }
    }

    // Wall hit detection
    function isHittingWall(){
        if (ship.x < -2 || ship.x > canvas.width - 35) {
            return true;
        }
    }



    // MAIN GAME FUNCTION
    function game() {
        hitDetected();
        ctx.clearRect( 0, 0, canvas.width, canvas.height );
        ship.draw();
        checkGate();
    }

    

})