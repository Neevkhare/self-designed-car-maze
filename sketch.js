var nonplayer
var nonplayer1
var nonplayer21
var nonplayer4
var nonplayer5
var nonplayer3
var nonplayer6,nonplayer7,nonplayer8,nonplayer9,nonplayer10
var player1
var finish
var edges

function preload(){
  nonplayerimg=loadImage("player1.png");
  nonplayer1img=loadImage("nonplayer1.png");
  nonplayer3img=loadImage("nonplayer3.png");
  nonplayer21img=loadImage("nonplayer21.png");
  nonplayer4img=loadImage("nonplayer4.png");
  player1img=loadImage("nonplayer.png");
  nonplayer5img=loadImage("nonplayer5.png");
}


function setup() {
  createCanvas(800,700);
  nonplayer=createSprite(100,100,10,10);
  nonplayer1=createSprite(300,100,10,10);
  nonplayer21=createSprite(500,100,10,10);
  nonplayer4=createSprite(550,200,10,10);
  nonplayer3=createSprite(200,200,10,10);
  nonplayer5=createSprite(325,300,10,10);
  nonplayer6=createSprite(530,450,10,10);
  nonplayer7=createSprite(150,500,10,10);
  nonplayer8=createSprite(680,500,10,10);
  nonplayer9=createSprite(600,600,10,10);
  nonplayer10=createSprite(200,670,10,10);
  player1=createSprite(700,100,10,10);


  finish=createSprite(10,600,20,100);
  finish.shapeColor="yellow"

  nonplayer.addImage(nonplayerimg);
  nonplayer1.addImage(nonplayer1img);
  nonplayer21.addImage(nonplayer21img);
  nonplayer4.addImage(nonplayer4img);
  nonplayer3.addImage(nonplayer3img);
  nonplayer5.addImage(nonplayer5img);
  nonplayer6.addImage(nonplayer1img);
  nonplayer7.addImage(nonplayer21img);
  nonplayer8.addImage(nonplayer4img);
  nonplayer9.addImage(nonplayer3img);
  nonplayer10.addImage(nonplayer5img);
  player1.addImage(player1img);
}

function draw() {
  background("black");
  edges=createEdgeSprites()  
  if(keyDown("UP_ARROW")){
    player1.y=player1.y-2;
  }
  if(keyDown("DOWN_ARROW")){
    player1.y=player1.y+2;
  }
  if(keyDown("LEFT_ARROW")){
    player1.x=player1.x-2;
  }
  if(keyDown("RIGHT_ARROW")){
    player1.x=player1.x+2;
  }
  if(player1.isTouching(nonplayer)
  ||player1.isTouching(nonplayer1)
  ||player1.isTouching(nonplayer3)
  ||player1.isTouching(nonplayer4)
  ||player1.isTouching(nonplayer5)
  ||player1.isTouching(nonplayer6)
  ||player1.isTouching(nonplayer7)
  ||player1.isTouching(nonplayer8)
  ||player1.isTouching(nonplayer9)
  ||player1.isTouching(nonplayer10)
  ||player1.isTouching(nonplayer21)){
    player1.x=700;
    player1.y=100;
  }
  if(player1.isTouching(finish)){
    textSize(24);
    fill("blue");
    strokeWeight(6);
    text("YOU WON",400,350);
  }
  drawSprites();
}