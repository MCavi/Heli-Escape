import Ship from '../object/ship';
import Gate from '../object/gate';

document.addEventListener('DOMContentLoaded', () => {
    
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

    ref.on('value', gotData, errData);
    
    function gotData(data) {
        const scores = data.val();
        const keys = Object.keys(scores);
        document.getElementById('submits').innerHTML = keys.length;
        const scoreList = []
        for (let idx = 0; idx < keys.length; idx++) {

            const key = keys[idx];
            scoreList.push(scores[key]);

        };

        scoreList.sort( ( obj1, obj2 ) => { 
            if (obj1.score < obj2.score) return 1;
            if (obj1.score > obj2.score) return -1;
            if ( obj1.score === obj2.score ) return 0;
            })

        const leaderBoardLength = Math.min(scoreList.length, 10);
        const highScores = scoreList.slice( 0, leaderBoardLength );
        const ul = document.getElementById("leaderboard-list");


        for ( let idx = 0; idx < highScores.length; idx++ ) {
            if ( highScores[idx].name && highScores[idx].score && !document.getElementById('9') ) {
                const li = document.createElement( 'li' );
                li.setAttribute( "id", idx );
                li.innerHTML = highScores[idx].name + " :   " + highScores[idx].score;
                ul.appendChild(li);
            };
        };
        
    };

    function errData(err) {
        console.log('Error!');
        console.log(err);
    }

    // Canvas
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const ship = new Ship(ctx);

    document.getElementById('startButton').addEventListener('click', () => {
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('instructions1').style.display = 'none';
        document.getElementById('instructions2').style.display = 'none';
        
        
        document.getElementById("restart-button").onclick = () => { handleRestart() };
        document.getElementById('submit-button').onclick = () => { handleSubmit() };


        const gates = [];
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
            if ((ship.y == gates[0].y && !(isHittingWall() || isHittingGate())) || (ship.y == gates[0].y && score == 12) ) {
                score += 1;
            };
            if ( isHittingWall() || isHittingGate() ) {
                gameOver();
            };
        };
    
        // Wall hit detection
        function isHittingWall(){
            if (ship.x < -2 || ship.x > canvas.width - 85) {
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
            ship.acc = 0;
            ship.hSpeed = 0;

            for ( let i = 0; i < gates.length; i++) {
                gates[i].vSpeed = 0;
            }

            sleep(500).then(() => {
                document.getElementById('score').innerHTML = score;
                document.getElementById('gameover').style.display = "flex";
            })
        };

        let count = 4;
        function countdown() {
            if (count > 0) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ship.draw();
                ctx.font = "54px 'Chewy', cursive";
                ctx.fillStyle = "smoke-white";
                ctx.fillText(count, 260, 300);
                count--;
                setTimeout(countdown, 700);
            }
            else {
                gameEngine()
            }
        }
        
        function handleRestart(){
            document.location.reload();
        }

        function handleSubmit(){
            let name = document.getElementById('initial-input').value.slice(0,3);
            const data = {
                name: name,
                score: score
            }
            ref.push(data);
            handleRestart();
        }
    
        function drawScore() {
            ctx.font = "48px 'Chewy', cursive";
            ctx.fillStyle = "black";
            ctx.fillText(score, 260, 50);
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


        countdown();

        // Helper functions
        function sleep(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }

    })


    




})