var movingrect , fixedrect





function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 50, 50);
 movingrect = createSprite(200,200,40,40)
 fixedrect.shapeColor="yellow"
 movingrect.shapeColor="red"
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  //if(isToching()){
   if( movingrect.x-fixedrect.x<fixedrect.width/2 + movingrect.width/2
       && fixedrect.x-movingrect.x<fixedrect.width/2 + movingrect.width/2
       && movingrect.y-fixedrect.y<fixedrect.height/2 + movingrect.height/2
       && fixedrect.y-movingrect.y<fixedrect.height/2 + movingrect.height/2){
    fixedrect.shapeColor="green"
    movingrect.shapeColor="blue"
     }
     /*else{
    fixedrect.shapeColor="pink"
    movingrect.shapeColor="red"
     }*/
   }
 //isToching();
  drawSprites();
