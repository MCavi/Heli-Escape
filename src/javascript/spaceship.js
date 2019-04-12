import Ship from '../object/ship';
import Gate from '../object/pipe';

document.addEventListener('DOMContentLoaded', () => {
    console.log("hello world");
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const ship = new Ship(ctx);
    const gates = [];
    gates[0] = new Gate(ctx);
    const background = new Image();
    background.src = "../assets/space-background.jpeg"


    function draw() {
        ctx.clearRect( 0, 0, canvas.width, canvas.height );
        ship.draw();
        for ( let i = 0; i < gates.length; i++ ) {
            gates[i].draw();
        };

        if ( gates[0].y == 300 ) {
            gates.push( new Gate(ctx) );
        };

        if ( gates[0].y == 630 ) { 
            gates.shift();
        }
    }
    
    setInterval(draw, 30);

})