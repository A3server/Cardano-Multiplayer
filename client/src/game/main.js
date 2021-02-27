import { Vector } from "p5";
import React from "react";
import Sketch from "react-p5";
import Player from "./Player";
import Wall from "./Wall";
//import Ray from "./Ray"
const mainapp = () => {
    let player;
    let wall;
    let wall2;
    let outsidewall1;
    let outsidewall2;
    let outsidewall3;
    let outsidewall4;

    function setup (p5, canvasParentRef) {
        //Canvas of size 1000x800 
        let canvas = p5.createCanvas(1000, 800).parent(canvasParentRef);
        player = new Player(p5, 0, 0);
        wall = new Wall(new Vector(p5.random(canvas.width), p5.random(canvas.height)), new Vector(p5.random(canvas.width), p5.random(canvas.height)));
        wall2 = new Wall(new Vector(p5.random(canvas.width), p5.random(canvas.height)), new Vector(p5.random(canvas.width), p5.random(canvas.height)));
        //p5.frameRate(10);
        console.log(canvas.width);
        outsidewall1 = new Wall(new Vector(0, 0), new Vector(0, canvas.height));
        outsidewall2 = new Wall(new Vector(0, 0), new Vector(canvas.width, 0));
        outsidewall3 = new Wall(new Vector(canvas.width, 0), new Vector(canvas.width, canvas.height));
        outsidewall4 = new Wall(new Vector(0, canvas.height), new Vector(canvas.width, canvas.height));
    };
    function draw (p5) {
        p5.background(51);
        player.update(p5); // TIRAR A WALL
        player.display(p5);
        for(let wall of Wall.getWalls()){
            wall.display(p5);
        }
    };
    function keyPressed(p5){
        if(p5.keyCode === p5.UP_ARROW){
            player.dir(0,-1);
        }
        else if(p5.keyCode === p5.DOWN_ARROW){
            player.dir(0,1);
        }
        else if(p5.keyCode === p5.RIGHT_ARROW){
            player.dir(1,0);
        }
        else if(p5.keyCode === p5.LEFT_ARROW){
            player.dir(-1,0);
        }
    }
    function keyReleased() {
        player.dir(0,0);
    }

    return (
        <div className="App">
      <Sketch setup={setup} draw={draw} keyPressed={keyPressed} keyReleased={keyReleased} className="App" />
    </div>

    )
}
export default mainapp