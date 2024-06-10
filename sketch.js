function setup() {
    createCanvas(700, 700);
    background("black");
  }
  
  function draw() {
  
    stroke("white");
    fill("white");
    frameRate(300)
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 25);
    }
  }
  