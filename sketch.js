   //create variables sprites
   var jerryimageEnd,jerryimage,jerry,jerryAnimation;
   var tomAnimation,tomimage,tomimageEnd,tom;
   var parkimage;

function preload() {
   parkimage = loadImage("images/garden.png");
   tomAnimation = loadAnimation("images/tomThree.png","images/tomTwo.png");
   tomimage = loadAnimation("images/tomFour.png");
   tomimageEnd = loadAnimation("images/tomOne.png")
   jerryimage = loadAnimation("images/jerryOne.png");
   jerryimageEnd = loadAnimation("images/jerryFour.png");
   jerryAnimation = loadAnimation("images/jerryThree.png","images/jerryTwo.png");
   
}

function setup(){
    createCanvas(1200,700);
    
    tom = createSprite(870,500,10,10);
    tom.addAnimation("tomSleeping",tomimage);
    tom.scale = 0.3;

    jerry = createSprite(150,550,10,10);
    jerry.addAnimation("jerryPlaying",jerryimage);
    jerry.scale = 0.2;


 /* tom.setCollider("rectangle",0,0,tom.width,tom.height);
  tom.debug = true;
  
  jerry.setCollider("rectangle",0,0,jerry.width,jerry.height);
  jerry.debug = true;*/
  
    
} 
    
    
    
   

       

function draw() {
    background(parkimage);

    if (tom.x - jerry.x < (tom.width - jerry.width)/2)  {
      tom.velocityX = 0;
      tom.addAnimation("sit",tomimage);
      tom.changeAnimation("sit");
      jerry.addAnimation("tease",jerryimageEnd);
      jerry.changeAnimation("tease");
    
    }
    
    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -3;
    tom.addAnimation("moving", tomAnimation);
    tom.changeAnimation("moving");
    jerry.addAnimation("tease",jerryAnimation);
    jerry.frameDelay = 25;
    jerry.changeAnimation("tease");
  
  }
  


   
}











