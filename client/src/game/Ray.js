import Wall from "./Wall";
import {Vector} from "p5";

class Ray{
    constructor(startp, dir){
        //starting point
        this.startp = startp;
        this.dir = dir;

        //casted point
        this.cPoint = new Vector(0,0);//this.cast();
        this.distance = null;
        this.objectHit = null;
        this.angle = new Vector(1,0).angleBetween(dir);
    }

    //draws ray directions
    display(p5){
        p5.stroke(255);
        p5.line(this.startp.x, this.startp.y, this.startp.x + this.dir.x * 10, this.startp.y + this.dir.y * 10);
    }

    //draws raycasts
    showCast(p5){
        if(this.cPoint){
            //console.log("HIT");
            p5.stroke(200);
            p5.line(this.startp.x, this.startp.y, this.cPoint.x, this.cPoint.y);
        }  
    }

    //casts the ray to everywall and equals thiss.cPoint the closest collision point
    cast(){
        let record = Infinity;
        let closest = null;
        let hit = null;
        for(let wall of Wall.getWalls()){
            let pt = this.singleCast(wall);
            if(pt){
                const d = Vector.dist(this.startp, pt)
                //console.log(pt, this.startp);
                if (d<record){
                    record = d;
                    closest = pt;
                    hit = wall
                }
            }
        }
        //console.log(closest);
        this.objectHit = hit;
        this.distance = record;
        this.cPoint = closest;
    }

    //casts the ray to the given wall and returns the closest point
    singleCast(wall){
        const endpx = this.startp.x + this.dir.x;
        const endpy = this.startp.y + this.dir.y;

        const den = (wall.p1.x - wall.p2.x) * (this.startp.y - endpy) - (wall.p1.y - wall.p2.y) * (this.startp.x - endpx);
        if(den === 0){
            return;
        }
        const t = ((wall.p1.x - this.startp.x) * (this.startp.y - endpy) - (wall.p1.y - this.startp.y) * (this.startp.x - endpx)) / den;
        const u = -((wall.p1.x - wall.p2.x) * (wall.p1.y - this.startp.y) - (wall.p1.y - wall.p2.y) * (wall.p1.x - this.startp.x)) / den;
        if (t > 0 && t < 1 && u > 0){
            let pt = new Vector(wall.p1.x + t * (wall.p2.x - wall.p1.x),
                       wall.p1.y + t * (wall.p2.y - wall.p1.y));
            return pt;
        }else{
            return;
        }
    }
}

export default Ray;