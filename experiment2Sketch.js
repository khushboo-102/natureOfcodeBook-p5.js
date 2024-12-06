 

let rectY = 400; // Initial Y position of the rectangle
let speed = 5; // Speed of the rectangle

function setup() {
  createCanvas(1800, 900); // Create a canvas of 400x400
}

function draw() {
  background("pink"); // Clear the background
  
  fill(100, 200, 255); // Set rectangle color
  rect(900, rectY, 100, 50); // Draw the rectangle (x, y, width, height)

  rectY -= speed; // Move the rectangle upword

  // If the rectangle moves beyond the canvas height, reset to the top
  if ( rectY<0)    {
    rectY = height;
  }
}   
