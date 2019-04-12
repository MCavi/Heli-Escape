class Gate {
    constructor(ctx) {
        this.ctx = ctx;
        this.height = 60;
        this.width = Math.floor(Math.random() * (300 - 50) + 50);
        this.x = 0;
        this.y = -60;
        this.vSpeed = 5;
        this.gap = 200;
    }

    draw(){
        this.y += this.vSpeed;
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.rect(this.width + this.gap, this.y, 600, this.height);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Gate;