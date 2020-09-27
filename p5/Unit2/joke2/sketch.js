let timer = 0 ;
let state = 0 ;

function setup() {
  createCanvas(500, 500);
  textSize(25);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {

  switch(state){

    case 0:
    background('red') ;
    text("Someone asked me to name 2 structures\n that hold water.", 250, 250) ;
    timer = timer + 1 ;
    if (timer > 5*60) {
        state = 1 ;
        timer = 0 ;
    }


    break ;

    case 1:
    background('blue') ;
    text("I was like well damn.", 250, 250) ;
    break ;

  }

}
