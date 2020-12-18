
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var backg;
var BG;
var ing;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstaceImage = loadImage("obstacle.png");
  
  BG = loadImage("Desert.jpg");
  
  
  FoodGroup = new Group();
  
  obstacleGroup = new Group();
}

function setup() {
   createCanvas(600, 600);
  
  backg = createSprite(200,200,20,20);
  
  backg.addAnimation("Desert.jpg",BG);
  
  backg.velocityX = -3;
   
  monkey = createSprite(50,450,30,30);
  
  monkey.addAnimation("sprite_0.png,sprite_1.png,sprite_2.png,sprite_3.png,sprite_4.png,sprite_5.png,sprite_6.png,sprite_7.png,sprite_8.png",monkey_running);
  
  monkey.scale = 0.2;
 
  monkey.velocityY = 8;
  
  ing = createSprite(200,530,600,40);
  ing.visible = false;
  
  
}
function draw() {
   if (backg.x < 0){
    backg.x = backg.width/2;
    }
  monkey.collide(ing);
  
  monkey.collide(obstacleGroup);
  
  if(keyDown("space")){
    monkey.velocityY = -13;
  }
  monkey.velocityY = monkey.velocityY +0.5;

  spawnFood();
  
  spawnobstacle();
  
  drawSprites();
}

function spawnFood(){
  if (frameCount%150 === 0){
    
    var food = createSprite(600,350);
    food.addImage( bananaImage);
    food.scale = 0.1;
    food.velocityX = -5;
    
    FoodGroup.add(food);
  }
}


function spawnobstacle(){
  if (frameCount%250 === 0){
    
    var rock = createSprite(600,480);
    rock.addImage( obstaceImage);
    rock.scale = 0.2;
    rock.velocityX = -5;
    
    obstacleGroup.add(rock);
  }
}

 

