var ground, groundImg;
var zombie, zombieImg;

function preload (){
    groundImg = loadImage("ground.png");
    zombieImg = loadAnimation("zombie0.png","zombie1.png","zombie2.png","zombie3.png","zombie4.png",
    "zombie5.png","zombie6.png","zombie7.png","zombie8.png","zombie9.png");
}

function setup(){
    createCanvas(800, 600);
    ground = createSprite(400,300,800,600);
    ground.addImage(groundImg);

    zombie = createSprite(150,485,50,50);
    zombie.addAnimation("running",zombieImg);
    zombie.scale = 0.5;
    zombie.velocityX = 3;   
}

function draw(){
    background(0);
    drawSprites();

}