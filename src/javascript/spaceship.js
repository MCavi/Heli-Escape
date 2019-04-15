import Ship from '../object/ship';
import Gate from '../object/gate';

document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // var background = new Image();
    // background.src = "https://ae01.alicdn.com/kf/HTB1SuU.e3KTBuNkSne1q6yJoXXaE/KATE-5x7ft-Cartoon-City-Night-Photo-Superhero-Party-Backdrop-Cosplay-Photography-Background-Kids-Birthday-Party-Decorations.jpg";

    // Make sure the image is loaded first otherwise nothing will draw.
    // background.onload = function () {
    //     ctx.drawImage(background, 0, 0);
    // }

    
    document.getElementById('startButton').addEventListener('click', () => {

        // background.onload = function () {
        //     ctx.drawImage(background, 0, 0);
        // }

        const startButton = document.getElementById('startButton');
        startButton.style.display = 'none';
        console.log("hello world");
        
        const ship = new Ship(ctx);
        const gates = [];
        const interval = setInterval(gameEngine, 30);


        gates[0] = new Gate(ctx);
        let score = 0;

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
            };
        };
    
        // MAIN HIT DETECTION
        function hitDetected(){
            // debugger
            if ( ship.y == gates[0].y ) {
                score += 1;
            };
            if ( isHittingWall() || isHittingGate() ) {
                gameOver();
            };
        };
    
        // Wall hit detection
        function isHittingWall(){
            if (ship.x < -2 || ship.x > canvas.width - 35) {
                return true;
            };
        };
    
        // Gate hit detection
        function isHittingGate() {
            for ( let i = 0; i < gates.length; i++ ) {
                if (isHittingLeftGate(i) || isHittingRightGate(i)) {
                    return true ;
                };
            };
        };
    
        // Left gate hit detection.
        function isHittingLeftGate(i) {
            if (ship.x < gates[i].leftX + gates[i].leftWidth &&
                ship.x + ship.width > gates[i].leftX &&
                ship.y < gates[i].y + gates[i].height &&
                ship.y + ship.height > gates[i].y) {
                return true;
            };
        };
    
        // Right gate hit detection.
        function isHittingRightGate(i) {
            if (ship.x < gates[i].rightX + gates[i].rightWidth &&
                ship.x + ship.width > gates[i].rightX &&
                ship.y < gates[i].y + gates[i].height &&
                ship.y + ship.height > gates[i].y) {
                return true;
            }
        }
    
        function gameOver(){
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        };
    
        function drawScore() {
            ctx.font = "48px sans serif";
            ctx.fillStyle = "#0095DD";
            ctx.fillText(score, 275, 50);
        };
        
    
        // MAIN GAME FUNCTION
        function gameEngine() {
            hitDetected();
            ctx.clearRect( 0, 0, canvas.width, canvas.height );
            ship.draw();
            drawScore();
            checkGate();
            // requestAnimationFrame(gameEngine)
        };
        // gameEngine();
    }
    )


})