const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var thunder1, thunder2, thunder3, thunder4;
var thunder;
var rand;
var rain = [];
var maximumRain = 100;
var umbrella;
var thunderCreatedFrame = 0;

function preload(){
thunder1 = loadImage("Images/thunderbolt_1.png");   
thunder2 = loadImage("Images/thunderbolt_2.png");   
thunder3 = loadImage("Images/thunderbolt_3.png");   
thunder4 = loadImage("Images/thunderbolt_4.png");   
}

function setup(){
engine = Engine.create();  
world = engine.world; 
createCanvas(400,700);

umbrella = new Umbrella(200, 500);

if(frameCount % 150 === 0){
for(var i = 0; i < maximumRain; i++){
rain.push(new Rain(random(0,400), random(0,400)));
}
}
    
}

function draw(){
Engine.update(engine);    
background("black");

umbrella.display();

if(frameCount % 80 === 0){
thunder = createSprite(random(10, 370), random(10, 30), 10, 10);

switch(rand){
    case 1:thunder.addImage(thunder1);
    break;
    case 2:thunder.addImage(thunder2);
    break;
    case 3:thunder.addImage(thunder3);
    break;
    case 4:thunder.addImage(thunder4);
    break;
    default:break;
   }
   thunder.scale = random(0.3, 0.6);
 }   
if(thunderCreatedFrame + 10 === frameCount && thunder){
thunder.destroy();    
}
for(var i = 0; i < maximumRain; i++){
rain[i].display();
rain[i].updateY();
}
drawSprites();
}
