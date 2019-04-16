

class Ship {
    constructor(ctx){
        this.ctx = ctx;
        this.direction = 1;
        this.x = 225;
        this.y = 450;
        this.height = 40;
        this.width = 90;
        this.hSpeed = 0;
        this.acc = .6;
        this.sprites = [159, 310, 460];
        this.frameCount = 0;
        this.tilt = 0;
        this.helicopter = new Image();
        this.helicopter.src = './src/assets/helicopter-spritesheet.png';
        this.addListeners();
    };

    draw(){
        if (this.frameCount > 10) {
            this.frameCount = 0;
            this.spriteIndex === 2 ? this.spriteIndex = 0 : this.spriteIndex++;
        } else {
            this.frameCount += 1;
        }

        let spriteFrame = Math.floor(this.frameCount / 10);
        this.physics();

        this.x += this.hSpeed;
        
        // helicopter.onload = () => {
            this.ctx.drawImage(this.helicopter, 
                                0, 
                                this.sprites[spriteFrame], 
                                // 159,
                                345,
                                135,
                                this.x, 
                                this.y, 
                                this.width, 
                                this.height);
        // };
    };

    addListeners(){
        document.addEventListener('click', this.handleClick.bind(this));
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    };

    handleClick(){
        this.direction = this.direction * -1;
    };

    handleKeyDown(e){
        if (e.key == "space" || e.key == " ") {
            this.direction = this.direction * -1;
        };
    };

    physics(){
            this.hSpeed += this.acc * this.direction;
    }; 

};

export default Ship;