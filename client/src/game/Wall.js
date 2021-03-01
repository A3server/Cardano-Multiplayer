
let walls=[];

class Wall{

    constructor(p1, p2, color, height){
        this.p1 = p1;
        this.p2 = p2;
        this.color = color;
        if(color){
            this.color = color;
        }else{
            //this.color = [255, 255, 255];
            this.color = [Math.random() *256, Math.random(255)*256, Math.random(255)*256];
        }

        if(height){
            this.height = height;
        }else{
            this.height = 64;
        }

        //automatically adds this wall to the wall array so every wall can be acessed without being passed as an argument 
        walls.push(this);
    }

    static getWalls(){
        return walls;
    }

    //draws wall
    display(p5){
        p5.push();
        p5.stroke(this.color);
        p5.line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
        p5.pop();
    }
}

export default Wall;