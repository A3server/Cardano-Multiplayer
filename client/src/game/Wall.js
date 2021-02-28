let walls=[];

class Wall{

    constructor(p1, p2){
        this.p1 = p1;
        this.p2 = p2;

        //automatically adds this wall to the wall array so every wall can be acessed without being passed as an argument 
        walls.push(this);
    }

    static getWalls(){
        return walls;
    }

    //draws wall
    display(p5){
        p5.stroke(255);
        p5.line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    }
}

export default Wall;