import Ship from '../object/ship';

document.addEventListener('DOMContentLoaded', () => {
    console.log("hello world");
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const ship = new Ship(ctx);
    const background = new Image();
    background.src = "../assets/space-background.jpeg"

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ship.draw();
    }
    
    setInterval(draw, 30);

})

