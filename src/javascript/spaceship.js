import Ship from '../object/ship';
import Gate from '../object/gate';

document.addEventListener('DOMContentLoaded', () => {
    
    console.log("hello world");

    // Firebase Config
    const firebaseConfig = {
        apiKey: "AIzaSyDMyAUaLi0HoaZsTsfFUJ7v0KjPSM5iERc",
        authDomain: "heli-escape.firebaseapp.com",
        databaseURL: "https://heli-escape.firebaseio.com",
        projectId: "heli-escape",
        storageBucket: "heli-escape.appspot.com",
        messagingSenderId: "83868845549"
    };
    firebase.initializeApp(firebaseConfig);    

    
    const database = firebase.database();
    const ref = database.ref('scores');
    // Push to database
    // const data = {
    //     name: "MAC",
    //     score: 44
    // }
    
    // ref.push(data);

    // Canvas
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const ship = new Ship(ctx);
   
    document.getElementById('startButton').addEventListener('keydown', () => {

        const gates = [];
        gates[0] = new Gate(ctx);
        const startButton = document.getElementById('startButton');
        startButton.style.display = 'none';
        
        // const interval = setInterval(gameEngine, 30);
        
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
            ctx.font = "48px 'Chewy', cursive";
            ctx.fillStyle = "white";
            ctx.fillText(score, 275, 50);
        };
        
    
        // MAIN GAME FUNCTION
        function gameEngine() {
            hitDetected();
            ctx.clearRect( 0, 0, canvas.width, canvas.height );
            checkGate();
            drawScore();
            ship.draw();
            requestAnimationFrame(gameEngine)
        };
        gameEngine();
    }
    )


})