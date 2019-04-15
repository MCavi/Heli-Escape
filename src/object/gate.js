class Gate {
    constructor(ctx) {
        this.ctx = ctx;

        this.vSpeed = 5;
        this.gap = 250;

        // Gate Widths
        this.leftWidth = Math.floor(Math.random() * (300 - 50) + 10);
        this.rightWidth = 600;

        // Gate Xs
        this.leftX = 0;
        this.rightX = this.leftWidth + this.gap;

        this.height = 60;
        this.y = -60;
        
    };

    draw(){
        this.y += this.vSpeed;
        this.ctx.beginPath();

        // Left gate
        this.ctx.rect(this.leftX, this.y, this.leftWidth, this.height);

        // Right gate
        this.ctx.rect(this.rightX, this.y, this.rightWidth, this.height);

        this.ctx.fillStyle = "rgb(86,84,106)";
        this.ctx.fill();
        this.ctx.closePath();
    };
};

export default Gate;