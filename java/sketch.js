
let graphics;
let x=40;
let y=40;
let angle=90;
//
let img;
let smallPoint, largePoint;

//

//


function preload() {
  img = loadImage('../storm.jpg');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(180,60,4);
  graphics=createGraphics(200,200);
  graphics.background(0);
  //
  smallPoint = 11;
  largePoint = 15;
  stroke(25);
  img.loadPixels();
  //



 }

function draw() {
    graphics.fill(255);
    graphics.stroke(25);
    graphics.ellipse(x,y,10);
    x+=random(-5,5);
    y+=random(-5,5);
    push();
    translate(700,350);
    rotate(angle);
    image(graphics,0,0);
    pop();
    angle+=0.1;
    push();
    translate(700,350);
    rotate(angle);
    image(graphics,0,100);
    pop();
    angle+=1;
    //

    let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
      let a = floor(random(img.width));
      let b = floor(random(img.height));
      let pix = img.get(a, b);
      fill(pix, 128);
      ellipse(a, b, pointillize, pointillize);
      //styles for the point
     ellipse(mouseX,mouseY,11);
     













  }


  //image(graphics,0,0);
  // put drawing code here
  //ellipse(80,80,40,50);
//  rect(200,30,200,900);
  //triangle(400,20,400,30,50,60,);
  //fill(200,30,800);
  //ellipse(mouseX,mouseY,32);
