var x = 0;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(100);




  push();
  translate(x, 0);
  avatar();
  x = x + 5;

  if (x > width) {
    x = -500;
  }
  pop();

}


function avatar() {
  background(0, 170, 255);
  rectMode(CENTER);
  angleMode(DEGREES);

  fill('green');
  rect(400, 575, 2500, 300);



  if (mouseIsPressed) {




    //tree trunk 1
    fill(86, 51, 16);
    rect(150, 375, 50, 150);

    //blue portal
    fill('blue');
    ellipse(150, 300, 150, 25);

    fill(3, 133, 247);
    ellipse(150, 300, 140, 20);

    //orange portal
    fill(247, 107, 3);
    ellipse(650, 300, 150, 25);

    fill(255, 129, 2);
    ellipse(650, 300, 140, 20);

    //tree trunk 2
    fill(86, 51, 16);
    rect(650, 225, 50, 150);

    //tree leaves
    fill('green');
    ellipse(650, 120, 150, 150);

    //levitation beams
    fill('orange');
    ellipse(400, 350, 50, 6);
    fill('blue');
    ellipse(400, 375, 30, 5);
    fill('orange');
    ellipse(400, 400, 20, 3);

    //body

    fill('white');
    ellipse(400, 250, 60, 150);

    //head
    ellipse(400, 150, 75, 75);

    fill(237, 92, 15);
    ellipse(400, 150, 40, 40);

    fill(0, 82, 224);
    ellipse(400, 150, 25, 25);

    fill(248, 127, 6);
    ellipse(400, 150, 10, 10);

    //left arm

    fill('white');
    ellipse(475, 225, 125, 25);
    fill(247, 122, 3)
    ellipse(536, 225, 35, 35);

    //right arm

    fill('white');
    ellipse(320, 225, 125, 25);
    fill('blue');
    ellipse(265, 225, 35, 35);

  } else {

    //tree trunk
    fill(86, 51, 16);
    rect(150, 300, 50, 300);
    //tree leaves
    fill('green');
    ellipse(150, 120, 150, 150);

    //levitation beams
    fill('orange');
    ellipse(400, 350, 50, 6);
    fill('blue');
    ellipse(400, 375, 30, 5);
    fill('orange');
    ellipse(400, 400, 20, 3);

    //body

    fill('white');
    ellipse(400, 250, 60, 150);

    //head
    ellipse(400, 150, 75, 75);

    fill(0, 82, 224);
    ellipse(400, 150, 40, 40);

    fill(237, 92, 15);
    ellipse(400, 150, 25, 25);

    fill(1, 9, 146);
    ellipse(400, 150, 10, 10);

    //left arm
    rotate('25');
    fill('white');
    ellipse(430, 90, 25, 125);

    //right arm
    rotate('-50');
    ellipse(295, 425, 25, 125);

  }

}
