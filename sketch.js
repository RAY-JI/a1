var score=0
var fieldImg, moleImg, hammerImg
var field, mole, hammer, hammerAtk
var hole1,hole2,hole3,hole4,hole5
var button
var time=0
var button

var gameState=PLAY
var PLAY

function preload(){
fieldImg=loadImage("assets/field.png");
moleImg=loadImage("assets/mole.png");
hammerImg=loadImage("assets/hammer.png");
hammerAtk=loadImage("assets/hammerAttack.png");
}

function setup() {
  createCanvas(800, 800);

mole=createSprite(400,400,50,70)
mole.addImage('mole',moleImg);
mole.scale=1.1
mole.visible=true

hammer=createSprite(400,400,60,80);
hammer.addImage('hammer',hammerImg);
hammer.addImage('hammerAtk', hammerAtk);
hammer.scale=0.14



hole1=createSprite(160,210,60,60);
hole1.visible=false;

hole2=createSprite(675,210,60,60);
hole2.visible=false;

hole3=createSprite(410,400,60,60);
hole3.visible=false;

hole4=createSprite(150,610,60,60);
hole4.visible=false;

hole5=createSprite(655,620,60,60)
hole5.visible=false

}

function draw() {
  background(fieldImg);
  fill("black")
  textSize(24)
  text("Score:"+score,50,50);
  text("Time:"+time+"s",600,50);



if(gameState===PLAY){
  hammer.x = World.mouseX;
hammer.y = World.mouseY;

if(frameCount % 30 ===0){
  time=time+1
}

if(frameCount % Math.round(random(50,100)) === 0){
  mole.x=hole1.x
  mole.y=hole1.y
  mole.visible=true;
}

if(frameCount % Math.round(random(60,120)) === 0){
  mole.x=hole2.x
  mole.y=hole2.y
  mole.visible=true;
}

if(frameCount % Math.round(random(70,140)) === 0){
  mole.x=hole3.x
  mole.y=hole3.y
  mole.visible=true;
}

if(frameCount % Math.round(random(80,160)) === 0){
  mole.x=hole4.x
  mole.y=hole4.y
  mole.visible=true;
}

if(frameCount % Math.round(random(90,180)) === 0){
  mole.x=hole5.x
  mole.y=hole5.y
  mole.visible=true;
}



if(keyDown("space")){
  mousePressed();
}

keyPressed();
}

//console.log(mole.x)
console.log(button.x)
drawSprites();
}

function mousePressed(){
  if(hammer.isTouching(mole)){
    mole.visible=false
    mole.x=1000
    mole.y=1000
    score=score+1
  }
}

function keyPressed(){
  if(keyDown("space")){
    hammer.changeImage('hammerAtk');
  }
  else(hammer.changeImage('hammer'))
}