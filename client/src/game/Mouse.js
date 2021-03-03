class Mouse{
    constructor(p5){
        this.p5 = p5
        this.lastMouseX = this.p5.mouseX;
        this.lastMouseY = this.p5.mouseY;
        this.deltaX = 0;
        this.deltaY = 0;
    }

    update(){
        this.deltaX = this.p5.mouseX-this.lastMouseX;
        this.deltaY = this.p5.mouseY-this.lastMouseY;

        this.lastMouseX = this.p5.mouseX;
        this.lastMouseY = this.p5.mouseY;
    }
}

export default Mouse;