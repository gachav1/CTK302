let cars = [];
let f1, f2, f3;
let bg;
let fonts = [];
let maxCars = 5;
let frogPos;
let state = 0;
let timer = 0;
let song1, song2;

function preload() {

  song1 = loadSound("assets/snow.mp3");
  song2 = loadSound("assets/10-2000.mp3");

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();

}

function setup() {
  createCanvas(600, 600);
  frogPos = createVector(width / 2, height - 80);
  textAlign(CENTER);
  rectMode(CENTER);

  f1 = loadFont("assets/BabySchoolItalic.ttf");
  f2 = loadFont("assets/rock.ttf");
  f3 = loadFont("assets/spaceage.ttf");
  bg = loadImage("assets/kitchen.png");
  net = loadImage("assets/swat.png");
  fly = loadImage("assets/fly.png");
  fonts = [f1, f2, f3];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function draw() {
  switch (state) {
    case 0:
      song1.play();
      background('teal');
      textFont(f1);
      textSize(50);
      text('Welcome!\n Click to Begin!', width / 2, height / 2);
      image(fly, 200, 100, 70, 70);
      image(net, 300, 100, 100, 150);
      break;

    case 1:
    song2.play();
      game();
      timer++;
      if (timer > 10 * 60) {
        state = 3;
      }
      break;

    case 2:
      background('red');
      text("YOU WON", width / 2, height / 2);
      image(net, 200, 320, 200, 250)
      song1.pause();
      break;

    case 3:
      background('Blue');
      text("YOU LOST", width / 2, height / 2);
      image(fly, 150, 120, 60, 60);
      image(fly, 400, 100, 60, 60);
      image(fly, 500, 300, 60, 60);
      image(fly, 200, 400, 60, 60);
      image(fly, 100, 200, 60, 60);
      image(fly, 350, 425, 60, 60);
      break;
  }
}


function game() {

  image(bg, 0, 0, width, height);

  // display and move 20 objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }


  }


  if (cars.length == 0) {
    state = 2;
  }

  //draw the frog
  fill('green');
  image(net, frogPos.x, frogPos.y, 100, 150);
  //ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();



}

function resetTheGame() {
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: //they win
      resetTheGame();
      state = 0;
      break;

    case 3: //they lose
      resetTheGame();
      state = 0;
      break;
  }
}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-8, 8), random(-8, 8));
    this.size = random(40, 80);
    this.c = color(random(150, 200), random(50), random(50));

    let b = floor(random(3));
    this.font = fonts[b];
  }

  // methods

  display() {
    //  rect(this.pos.x, this.pos.y, 50, 25);
    //  fill(this.c);
    image(fly, this.pos.x, this.pos.y, 40, 40);
    //  textFont(this.font);
    // textSize(this.size);
    //text('vote', this.pos.x, this.pos.y);
    //image(name, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
