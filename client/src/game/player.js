import Ray from "./Ray"
import {Vector} from "p5";

class Player{
    constructor(p5, id, wallet) {
        this.id = id;
        this.wallet = wallet;

        this.pos = new Vector(0,0);
        this.speed = new Vector(0,0);

        this.rays = [];
        for(let a = 0; a < 360; a += 1){
          this.rays.push(this.getRay(Vector.fromAngle(p5.radians(a))));
        }
        //this.rays.push(this.getRay(Vector.fromAngle(p5.radians(0))))
        console.log(this.rays);
    }
    // retirar a wall!!!!! 
    update(p5){
      let scl = 10;
      this.pos.x += this.speed.x*scl;
      this.pos.y += this.speed.y*scl;
      this.pos.x = p5.constrain(this.pos.x, 0, p5.width - scl);
      this.pos.y = p5.constrain(this.pos.y, 0, p5.height - scl);

      for(let ray of this.rays){
        ray.cast();
        ray.showCast(p5);
      }
    }
    display(p5){
        //p5.fill(255);
        //p5.rect(this.pos.x-10, this.pos.y-10, 20, 20);
        
        for(let ray of this.rays){
          ray.display(p5);
        }
    }
    dir(x,y){
      this.speed.x =x;
      this.speed.y =y;
    }

    getRay(dir){
      let ray = new Ray(this.pos, dir);
      return ray;
    }
}

export default Player;