//Create variables here
var dog, happyDog, database, foodS, foodStock,dogI,happyDogI

function preload()
{
  //load images here
  dogI=loadImage("dogImg.png")
  happyDogI=loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
  dog.addImage(dogI);
  dog.scale=0.15;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  textSize(20);

  
}


function draw() {  
background("blue");
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogI);
}
  drawSprites();
  fill(255,255,254);
  stroke("black")
  text("Food Remaining"+foodS,170,200);
  textSize(13);
  text("Press Up Arrow To feed the dog",130,10,300,20);

  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({food:x})
}

