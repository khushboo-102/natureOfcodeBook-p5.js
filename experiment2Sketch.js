 

let rectX = 0; // Initial X position of the rectangle
let speed = 5; // Speed of the rectangle

function setup() {
  createCanvas(1850, 950); // Create a canvas of 400x400
}

function draw() {
  background(173,204,255); // Clear the background
  
  fill(178, 102, 255); // Set rectangle color
  rect(rectX, 400, 100, 50); // Draw the rectangle (x, y, width, height)

  rectX += speed; // Move the rectangle rightside word

  // If the rectangle moves beyond the canvas height, reset to the top
  if ( rectX>width){
    rectX = 0;
  }

//Heading
textSize(40)
// fill("pink")
stroke(178, 102, 255)
text("Moving rectangle right side" ,700,90)
}  

