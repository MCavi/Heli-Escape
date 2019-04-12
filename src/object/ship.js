class Ship {
    constructor(ctx){
        this.ctx = ctx;
        this.direction = 1;
        this.x = 50;
        this.y = 20;
        this.height = 35;
        this.width = 35;
        this.hSpeed = 0;
        this.acc = 1.5;
        this.addListeners();
    }

    draw(){
        this.physics();
        this.x += this.hSpeed;
        this.ctx.beginPath();
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.closePath();
    };

    addListeners(){
        document.addEventListener('click', this.handleClick.bind(this));
    };

    handleClick(){
        console.log(this.direction)
        this.direction = this.direction * -1;
    };

    physics(){
        this.hSpeed += this.acc * this.direction;
    } 



}

export default Ship;