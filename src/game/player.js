import Ray from "./Ray"
import Angle from "./Angle"
import {Vector} from "p5";
import Mouse from "./Mouse";

const defaultVector = new Vector(1,0);

class Player{
    constructor(p5, id, wallet) {
        this.id = id;
        this.wallet = wallet;

        this.mouse = new Mouse(p5);
        this.sensetivity = 0.1;

        this.pos = new Vector(0,0);
        this.speed = 5;
        this.direction = new Vector(1,0);
        this.currentAng = new Angle(defaultVector.angleBetween(this.direction));
        console.log(defaultVector.angleBetween(this.direction))

        this.rays = [];
        this.fov = 60;
        this.toRadians = p5.radians;

        //initializes player raycasts
        for(let a = -this.fov/2; a < this.fov/2; a += 0.1){
          this.rays.push(this.getRay(p5.radians(a)));
        }
        //this.rays.push(this.getRay(Vector.fromAngle(p5.radians(0))))
        console.log(this.rays);
    }
    
    update(p5){
      //this.mouse.update();
      this.rotate(p5.movedX * this.sensetivity);
      if(p5.keyIsDown(87)){
        this.move(1, p5);
      }
      if(p5.keyIsDown(83)){
          this.move(-1, p5);
      }
      if(p5.keyIsDown(68)){
        this.rotate(2);
      }
      if(p5.keyIsDown(65)){
        this.rotate(-2);
      }
      
      

      //casting a casting the rays every frame
      for(let ray of this.rays){
        ray.cast();
        ray.showCast(p5);
      }
    }

    display(p5){
        //p5.fill(255);
        //p5.rect(this.pos.x-10, this.pos.y-10, 20, 20);
        
        //show rays
        for(let ray of this.rays){
          ray.display(p5);
        }
    }

    //change player movement direcrion
    move(amount, p5){
      //movement
      this.pos.x += this.direction.x*this.speed*amount;
      this.pos.y += this.direction.y*this.speed*amount;
      this.pos.x = p5.constrain(this.pos.x, 1, p5.width/2 -1);
      this.pos.y = p5.constrain(this.pos.y, 1, p5.height -1);
      //console.log(this.pos.x, this.pos.y);

    }

    rotate(amount){
      const dir = Vector.fromAngle(this.toRadians(amount) + this.currentAng.angle)
      this.direction.x = dir.x;
      this.direction.y = dir.y; 
      this.currentAng.angle = defaultVector.angleBetween(this.direction);
    }

    //creates and returns a ray with the player pos
    getRay(angle){
      let ray = new Ray(this.pos, this.currentAng, angle);
      return ray;
    }
}

export default Player;