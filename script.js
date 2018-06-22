var p5Canvas;
var myName;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Karell"); // enter your name here!
  noLoop();
}

 /*
  full reference: https://p5js.org/reference/
  line: https://p5js.org/reference/#/p5/line
  rectangle: https://p5js.org/reference/#/p5/rect
  ellipse: https://p5js.org/reference/#/p5/ellipse
  arc: https://p5js.org/reference/#/p5/arc
  background color: https://p5js.org/reference/#/p5/background
  shape color: https://p5js.org/reference/#/p5/fill
  line color, weight, etc: https://p5js.org/reference/#/p5/stroke
 */

// Write all your code inside the draw() function below!
function draw() {
  // Example. You can remove when you're ready!
  background(25, 50, 255); // try changing this to a blue background
  fill(255, 204, 0);    // Always call fill() before the shape you want to fill in.
  rect(130, 120, 155, 100); // Draw a 30x20 pixel rectangle at coordinate (55,55)
  triangle(30,75,58,20,86,75);
  line(30, 20, 85, 20);
stroke(126);
line(85, 20, 85, 75);
stroke(255);
line(85, 75, 30, 75);
line(30, 20, 85, 75);
quad(38, 31, 86, 20, 69, 63, 30, 76);
console.log("I am below line function");
}
