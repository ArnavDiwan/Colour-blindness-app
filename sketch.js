var bg,bg2,form,system,code,security;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box1Img, box2Img, box3Img, box4Img, box5Img, box6Img, box7Img, box8Img, box9Img, box10Img;
var score=0;
var line;
var T;
var TImg

function preload() {
 
  
//bg= loadImage("Images/lion.jpg");

box1Img = loadImage("Images/1.jpg");
box2Img = loadImage("Images/2.png");
box3Img = loadImage("Images/3.png");
box4Img = loadImage("Images/4.png");
box5Img = loadImage("Images/5.png");
box6Img = loadImage("Images/6.png");
box7Img = loadImage("Images/7.png");
box8Img = loadImage("Images/8.png");
box9Img = loadImage("Images/9.jpg");
box10Img = loadImage("Images/10.png");
TImg = loadAnimation("Images/T1.png", "Images/T2.png", "Images/T3.png", "Images/T4.png");
}

function setup() {
  createCanvas(1700,765);
  security = new Security();
  system = new System();

  

  box1 = createSprite(500, 380, 600, 600);
  box1.addImage("box", box1Img);
  box1.scale = 0.77

  box2 = createSprite(507, 380, 600, 600);
  box2.addImage("box", box2Img);
  box2.scale = 0.49;
  box2.visible = false;

  box3 = createSprite(507, 380, 600, 600);
  box3.addImage("box", box3Img);
  box3.scale = 0.49;
  box3.visible = false;

  box4 = createSprite(507, 380, 600, 600);
  box4.addImage("box", box4Img);
  box4.scale = 0.49;
  box4.visible = false;

  box5 = createSprite(507, 380, 600, 600);
  box5.addImage("box", box5Img);
  box5.scale = 0.49;
  box5.visible = false;
  
  box6 = createSprite(507, 380, 600, 600);
  box6.addImage("box", box6Img);
  box6.scale = 0.49;
  box6.visible = false;
  
  box7 = createSprite(507, 380, 600, 600);
  box7.addImage("box", box7Img);
  box7.scale = 0.49;
  box7.visible = false;
  
  box8 = createSprite(507, 380, 600, 600);
  box8.addImage("box", box8Img);
  box8.scale = 0.49;
  box8.visible = false;
  
  box9 = createSprite(507, 380, 600, 600);
  box9.addImage("box", box9Img);
  box9.scale = 0.49;
  box9.visible = false;
  
  box10 = createSprite(507, 380, 600, 600);
  box10.addImage("box", box10Img);
  box10.scale = 0.49;
  box10.visible = false;

  line=createSprite(725, 382.5, 20, 770);
  line.shapeColor = "white";

  T = createSprite(900, displayHeight/2);
  T.visible = false;
  T.addAnimation("T", TImg)
  
}

function draw() {
  background(0, 0, 0);

  //box1.shapeColor = ("yellow");
  
  
    
  
  
  security.display();
  textSize(30);
  fill("white");
  text("This is a colour blindness test in this test you have to type the number",750, 190);

  textSize(30);
  fill("white");
  text("you see in the pictures in the white colour test box and once you type", 750, 240)
  
  textSize(30);
  fill("white");
  text("you have to click the button below it to go to the next question", 750, 290)

  textSize(30);
  fill("white");
  text("you have to type it honestly as it is after all your own test.", 750, 340);
  
  textSize(30);
  fill("white");
  text("Developer: Arnav Diwan", 750, 390)

  textSize(30);
  fill("white");
  text("Number of Correct Answers: "+score, 300, 50);

  textSize(30);
  fill("white");
  text("__", 677, 50);

  textSize(30);
  fill("white");
  text("10", 677, 85);

  textSize(30);
  fill("white");
  text("Developer: Arnav Diwan", 750, 390)

  drawSprites()
}