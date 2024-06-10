function setup() {
    createCanvas(700, 700);
    background("white");
  }
  
  function draw() {
  
    stroke("black");
    fill("black");
    frameRate(300)
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 25);
    }
  }
  