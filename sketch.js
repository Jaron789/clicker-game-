var score =0;
var ballon,ballonImg;

var ballonGroup;

function preload(){

 ballonImg = loadImage("ballon.png") 
}

function setup() {
createCanvas(600,600);


scoreboard= createElement("h1");



}

function draw() {
  background("grey")
  
  scoreboard.html("score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  
  
  if (frameCount % 80 === 0) {
    drawballon();
  }

  if (frameCount % 100 === 0) {
    drawballon();
  }

  
   drawSprites();


  }
    function drawballon(){
      ballon = createSprite(800,random(20,780),40,40);
      ballonn.addImage(ballonImg);
      ballon.scale = 0.1;
      ballon.velocityX = -8;
      ballon.lifetime = 400;
    }



