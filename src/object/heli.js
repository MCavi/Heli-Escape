class Heli {
    constructor(ctx){
        this.ctx = ctx;
        this.direction = 1;
        this.x = 50;
        this.y = 20;
        this.height = 35;
        this.width = 35;
        this.heliX = 5;
        this.acc = 2;
        this.addListeners();
    }

    draw(){
        this.x += this.heliX * this.direction;
        this.ctx.beginPath();
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.closePath();
    };

    addListeners(){
        document.addEventListener('click', this.handleClick.bind);
    };
    
    handleClick(){
        console.log(this.direction)
        this.direction = this.direction * -1;
    };




}

export default Heli;