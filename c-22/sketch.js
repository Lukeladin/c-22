var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fairy, fairyImg;
var somFada;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fairyImg =loadAnimation("images/fairyImage1.png","images/fairyImage2.png");

    somFada =loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    fairy = createSprite(400,350);
    fairy.addAnimation("flying",fairyImg);
    fairy.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
    background(bgImg);
    if(keyCode == LEFT_ARROW){
        fairy.x -= 5;
    }
    else if(keyCode == RIGHT_ARROW){
        fairy.x += 5;
    }
    else {
        fairy.x = fairy.x;
    }
    if(star.y > 500 && starBody.position.y > 500){
        Matter.Body.setStatic(starBody, true);
        playSound(somFada);
    }

    drawSprites();
}
