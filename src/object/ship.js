

class Ship {
    constructor(ctx){
        this.ctx = ctx;
        this.direction = 1;
        this.x = 225;
        this.y = 450;
        this.height = 40;
        this.width = 80;
        this.hSpeed = 0;
        this.acc = 1.5;
        this.sprites = [159, 310, 460];
        this.frameCount = 0;
        this.options = {

        }

        this.addListeners();
    };

    draw(){
        if (this.frameCount > 30) {
            this.frameCount = 0;
        } else {
            this.frameCount += 1;
        }

        let spriteFrame = Math.floor(this.frameCount / 10);
        this.physics();

        this.x += this.hSpeed;
        const helicopter = new Image();
        helicopter.src = './src/assets/helicopter-spritesheet.png';
        this.spriteIndex === 2 ? this.spriteIndex = 0 : this.spriteIndex++ ;
        helicopter.onload = () => {
            this.ctx.drawImage(helicopter, 
                                0, 
                                this.sprites[spriteFrame], 
                                345,
                                135,
                                this.x, 
                                this.y, 
                                this.width, 
                                this.height);
        };
    };

    addListeners(){
        document.addEventListener('click', this.handleClick.bind(this));
    };

    handleClick(){
        console.log(this.direction);
        this.direction = this.direction * -1;
    };

    physics(){
            this.hSpeed += this.acc * this.direction;
    }; 

};

export default Ship;