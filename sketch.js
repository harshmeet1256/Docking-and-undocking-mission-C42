var iss, issImg, spaceCraft, spaceCraftImg1, spaceCraftImg2, spaceCraftImg3, spaceCraftImg4;
var hasDocked=false;
var bgImg;

function preload(){
bgImg=loadImage("Images/spacebg.jpg");
issImg=loadAnimation("Images/iss.png");
spaceCraftImg1=loadAnimation("Images/spacecraft1.png"); 
spaceCraftImg2=loadAnimation("Images/spacecraft2.png"); 
spaceCraftImg3=loadAnimation("Images/spacecraft3.png"); 
spaceCraftImg4=loadAnimation("Images/spacecraft4.png"); 
}

function setup() {
  createCanvas(800,400);
  //creating iss
  iss=createSprite(400, 200, 50, 50);
  iss.addAnimation(issImg);
  //creating spacecraft
  spaceCraft=createSprite(400,200,50,50);
  spaceCraft.addAnimation(spaceCraftImg1);
  spaceCraft=createSprite(400,200,50,50);
  spaceCraft.addAnimation(spaceCraftImg2);
  spaceCraft=createSprite(400,200,50,50);
  spaceCraft.addAnimation(spaceCraftImg3);
  spaceCraft=createSprite(400,200,50,50);
  spaceCraft.addAnimation(spaceCraftImg4);
 
}

function draw() {
  background(bgImg);  

  if(!hasDocked){
    hasDocked = Math.round(random(x,y));
    hasDocked = Math.round(random(x,y));

    if(keyPressed("right_arrow")){
      spaceCraft3.x=spaceCraft3.x+4;
      }
    if(keyPressed("left_arrow")){
      spaceCraft.x=spaceCraft.x+4;
    } 
    if(keyPressed("down_arrow")){
      spaceCraft.y=spaceCraft.y+4;
    }
    if(keyPressed("up_arrow")){
      spaceCraft.y=spaceCraft.y+4;
    }
  }

  if(spaceCraft.isTouching(iss)){
    text("Docking Successful",400,300);
    textSize(20);

  } 
  drawSprites();

}