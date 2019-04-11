class Heli {
    constructor(ctx){
        this.ctx = ctx;
        this.direction = 1;
        this.x = 50;
        this.y = 20;
        this.height = 35;
        this.width = 35;
        this.hSpeed = 0;
        this.acc = 1.8;
    }

    draw(){
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    
}

export default Heli;