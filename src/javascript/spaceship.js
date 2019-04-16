import Ship from '../object/ship';
import Gate from '../object/gate';

document.addEventListener('DOMContentLoaded', () => {
    
    console.log("Hello World");

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
        // console.log(data);
        const keys = Object.keys(scores);
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
            const name = highScores[idx].name;
            const score = highScores[idx].score;
            const li = document.createElement( 'li' );
            li.setAttribute("id", "leaderboard-item");
            li.innerHTML = name + "  " + score;
            ul.appendChild(li);
        }

        
        // console.log(name, score);
    };

    function errData(err) {
        console.log('Error!');
        console.log(err);
    }

    // Canvas
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const ship = new Ship(ctx);
    
    // Create new element to html
    
    // var newEl = document.createElement('div');
    // newEl.appendChild(document.createTextNode('Hello World!'));
    // document.getElementById('body').appendChild(newEl);   
    document.getElementById('startButton').addEventListener('keydown', () => {
        
        
        document.getElementById("restart-button").onclick = () => { handleRestart() };
        document.getElementById('submit-button').onclick = () => { handleSubmit() };

        const gates = [];
        gates[0] = new Gate(ctx);
        const startButton = document.getElementById('startButton');
        startButton.style.display = 'none';
        
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
        
        function handleRestart(){
            document.location.reload();
        }

        function handleSubmit(){
            let name = document.getElementById('initial-input').value
            const data = {
                name: name,
                score: score
            }
            console.log(data)
            ref.push(data);
            handleRestart();
        }
    
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
    })


    

    // Helper functions
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    
    // Firebase query
    // const query = database().ref().child('scores/')
    //     .orderByChild("score").limitToLast(10);
    // let count = 10;
    // query.on('child_added', (snapshot) => {
    //     childScore = snapshot.val();
    //     let scoreBoard = document.getElementById("leaderboard");
    //     scoreBoard.innerHTML = `<div>Round: ${childScore.round} -  ${childScore.name.toUpperCase()} ${childScore.score}</div><br/>` + scoreBoard.innerHTML;
    //     count--;
    // });

})