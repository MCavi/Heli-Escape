import Heli from '../object/heli';

document.addEventListener('DOMContentLoaded', () => {
    console.log("hello world");
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const heli = new Heli(ctx);

    function draw() {
        heli.draw();
    }
    
    setInterval(draw, 30);

})

