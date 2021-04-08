import { Vector, Color } from "p5";
import React from "react";
import Sketch from "react-p5";
import Player from "./player";
import Wall from "./Wall";

//import Ray from "./Ray"
const mainapp = () => {
    let player;
    let tempWall;
    let canvas;
    let canvasW;
    let canvasH;
    function setup (p5, canvasParentRef) {
        //Canvas of size 1000x800
        canvas = p5.createCanvas(1600, 800).parent(canvasParentRef);
        canvasW = canvas.width/2;
        canvasH = canvas.height;

        //initializing map and player
        player = new Player(p5, 0, 0);
        new Wall(new Vector(p5.random(canvasW), p5.random(canvasH)), new Vector(p5.random(canvasW), p5.random(canvasH)));
        new Wall(new Vector(p5.random(canvasW), p5.random(canvasH)), new Vector(p5.random(canvasW), p5.random(canvasH)));
        ////p5.frameRate(10);
        //boundary walls
        new Wall(new Vector(0, 0), new Vector(0, canvasH), [100,100,100]);
        new Wall(new Vector(0, 0), new Vector(canvasW, 0), [0,255,0]);
        new Wall(new Vector(canvasW, 0), new Vector(canvasW, canvasH), [255,0,0]);
        new Wall(new Vector(0, canvasH), new Vector(canvasW, canvasH), [0,0,255]);

    };
    //draw function, draws to the screnn
    function draw (p5) {
        p5.background(51);
        player.update(p5);
        player.display(p5);
        for(let wall of Wall.getWalls()){
            wall.display(p5);
        }
        p5.push();
        p5.translate(canvasW,0);
        let offsetW = canvasW/player.rays.length;
        let offsetH;
        for(let i=0; i < player.rays.length; i++){
            let ray = player.rays[i];
            let lineH;
            if(ray.objectHit){
                lineH = (ray.objectHit.height * canvasH) /(ray.distance * p5.cos(ray.angleOffset));
                offsetH = canvasH/2-lineH/2;
                //console.log(offsetH, lineH, lineH+offsetH);
                p5.stroke(ray.objectHit.color);
                p5.fill(ray.objectHit.color);
                p5.rect(i*offsetW, offsetH, offsetW, lineH);
                p5.fill(ray.objectHit.color);
            }
        }
        p5.pop();
    };
    
    //function is called when any key is released
    // function keyReleased() {
    //     player.setSpeed(0);
    // }

    function mouseDragged(p5) {
        tempWall.p2 = new Vector(p5.mouseX, p5.mouseY);
    }

    function mousePressed(p5){
        tempWall = new Wall(new Vector(p5.mouseX, p5.mouseY),new Vector(p5.mouseX, p5.mouseY))
    }

    function keyPressed(p5) {
        if (p5.keyCode === p5.ESCAPE) {
            p5.exitPointerLock();
        } else if (p5.keyCode === 76) {
            console.log("l");
            p5.requestPointerLock();
        }
        console.log("pressed");
      }

    return (
        <div className="App">
      <Sketch setup={setup} draw={draw} keyPressed={keyPressed} mouseDragged={mouseDragged} mousePressed={mousePressed} className="App" />
    </div>

    )
}
export default mainapp