
var child,school;
var backgroundImg, happyImg, sadImg, schoolImg;

function preload(){
  backgroundImg = loadImage("background.jpg");
  happyImg  = loadImage("happy emoji.png");
  sadImg = loadImage("sad emoji.png");
  schoolImg = loadImage("school.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  school = createSprite(displayWidth/2,50,10,10);
  school.addImage(schoolImg);
  school.scale = 0.5;


  child = createSprite(displayWidth/2,displayHeight/2,10,10);
  child.addImage(happyImg);
  child.scale = 0.1;
}



function draw() {
  background(backgroundImg);

  
  camera.y = child.y;
  camera.x = child.x; 

  allOldText();
  allNewText();

  if(keyDown(LEFT_ARROW)) {
    child.x = child.x-2;
  }

  

  if(keyDown(RIGHT_ARROW)){
    child.x = child.x+2;
  }

  if(keyDown(UP_ARROW)){
    child.y = child.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    child.y = child.y+2;
  }

  if(child.x < displayWidth/2){
    child.addImage(sadImg)
  }

  if(child.x > displayWidth/2){
    child.addImage(happyImg)
  }

  
  line(displayWidth/2,-20000,displayWidth/2,displayHeight+20000)
  textSize(24);
  textFont("Georgia");
  fill(255);
  text("ପୁରୁଣା ଶିକ୍ଷା ନୀତି",-150,50)
  text("ନୂତନ ଶିକ୍ଷା ନୀତି |",displayWidth/2 + 250,50)
  drawSprites();
}

function allOldText(){
  textSize(18);
  textFont("Alatsi");
  fill(255);

  text("10 + 2 ", displayWidth/2 - 300,displayHeight/2);
  text("ବିଦ୍ୟାଳୟ ବ୍ୟବସ୍ଥା", displayWidth/2 - 300,displayHeight/2 + 50);

  text("ଏହି ନୀତି କେବଳ ମାର୍କ ଏବଂ ଏକାଡେମିକ୍ସ ଉପରେ ଧ୍ୟାନ ଦେଇଥାଏ |", displayWidth/2 - 700,displayHeight/2 - 200);

  text("ଏହି ନୀତି ଛାତ୍ରମାନଙ୍କୁ ନିଜ ଭାଷାରେ ଅଧ୍ୟୟନ କରିବାକୁ ଅନୁମତି ଦିଏ ନାହିଁ |", displayWidth/2 - 1300,displayHeight/2 - 100);
  
  text("ଆମର କ ଣସି କ ଶଳରେ ଆମେ କ ଣସି ଇଣ୍ଟର୍ନସିପ୍ ପାଇଲୁ ନାହିଁ | ", displayWidth/2 - 1000,displayHeight/2 + 200);

  text("ପରୀକ୍ଷା କେବଳ ଇଂରାଜୀ ଏବଂ ହିନ୍ଦୀରେ ଅନୁଷ୍ଠିତ ହୁଏ |", displayWidth/2 - 1000,displayHeight/2 + 70);

  text("ଶିକ୍ଷାର୍ଥୀମାନେ କେବଳ ଜଣେ ଛାତ୍ର ପଦବୀ ପାଇବାକୁ ଅଧିକାର ପାଇଛନ୍ତି", displayWidth/2 -700, displayHeight/2 +300);

  text("ଛାତ୍ରମାନେ କେବଳ ଏକାଡେମିକ୍ ପ୍ରଦର୍ଶନ ଆଧାରରେ ସ୍ଥାନିତ ହୋଇଛନ୍ତି |", displayWidth/2 - 1500,displayHeight/2 - 270);

  text("ଛାତ୍ରମାନଙ୍କୁ କୋଡିଂ, କୁମ୍ଭାର ଇତ୍ୟାଦି କ skills ଣସି କ skills ଶଳ ଶିଖାଯାଏ ନାହିଁ |", displayWidth/2 - 1200,displayHeight/2  + 400);

  text("ବାର୍ଷିକ ବୋର୍ଡ ପରୀକ୍ଷା ଅନୁଷ୍ଠିତ ହୁଏ |", displayWidth/2 - 1400,displayHeight/2 + 10);

  text("କ ଣସି ସାଂସ୍କୃତିକ ଅଧ୍ୟୟନ ପ୍ରଦାନ କରାଯାଇ ନାହିଁ |", displayWidth/2 - 1400,displayHeight/2 +300);

  text("ଯୋଗ୍ୟତା କେବଳ ସମ୍ପୂର୍ଣ୍ଣ ପାଠ୍ୟକ୍ରମ ପରେ ପ୍ରଦାନ କରାଯାଇଥାଏ |", displayWidth/2 - 1600,displayHeight/2 + 140);

  text("କଲେଜ ଆଡମିଶନ ପାଇଁ 12 ମାର୍କ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ |", displayWidth/2 - 1800,displayHeight/2 - 200);

  text("ଦେୟ ସୀମିତ ନୁହେଁ |", displayWidth/2 - 1400,displayHeight/2 + 480);

  text("ଛାତ୍ରମାନେ ବିଷୟ ପାଇଁ ସୀମିତ |", displayWidth/2 - 1750,displayHeight/2 + 350);
  
}

function allNewText(){
  textSize(18);
  textFont("Alatsi");
  fill(255);

  text(" 5 + 3 + 3 + 4 ", displayWidth/2 + 50,displayHeight/2);
  text("ବିଦ୍ୟାଳୟ ବ୍ୟବସ୍ଥା", displayWidth/2 + 50,displayHeight/2 + 50);

  text("ଏହି ନୀତି କେବଳ ମାର୍କ ଏବଂ ଏକାଡେମିକ୍ସ ଉପରେ ଧ୍ୟାନ ଦେଇନଥାଏ, ଏହା କ skills ଶଳ ଏବଂ ଅଣ-ଏକାଡେମିକ୍ କାର୍ଯ୍ୟକଳାପ ଉପରେ ମଧ୍ୟ ଧ୍ୟାନ ଦେଇଥାଏ |", displayWidth/2 + 200,displayHeight/2 - 250);

  text("ଛାତ୍ରମାନେ ବର୍ତ୍ତମାନ ସେମାନଙ୍କର ଆଞ୍ଚଳିକ ଭାଷାରେ ଅଧ୍ୟୟନ କରିପାରିବେ |", displayWidth/2 + 300,displayHeight/2 - 100);
  
  text("ଆମ ବିଦ୍ୟାଳୟ ଯୁଗରେ ଆମେ ଆମର କ ଶଳରେ ଇଣ୍ଟର୍ନସିପ୍ ପାଇପାରିବା |", displayWidth/2 + 500,displayHeight/2 + 200);

  text("ବର୍ତ୍ତମାନ ଆଞ୍ଚଳିକ ଭାଷାରେ ପରୀକ୍ଷା ଉପଲବ୍ଧ |", displayWidth/2 + 250,displayHeight/2 + 120);

  text("ଶିକ୍ଷକ ଏବଂ ଛାତ୍ରମାନେ ଏକ ଶିଶୁ ମାନ୍ୟତା ଦିଅନ୍ତି |", displayWidth/2 +250, displayHeight/2 +300);

  text("ଛାତ୍ରମାନେ ଏକାଡେମିକ୍ ପ୍ରଦର୍ଶନ ଏବଂ ସୃଜନଶୀଳତା ଆଧାରରେ ମଧ୍ୟ ସ୍ଥାନିତ ହୋଇଛନ୍ତି |", displayWidth/2 + 1000,displayHeight/2 - 310);

  text("ଛାତ୍ରମାନଙ୍କୁ କୋଡିଂ, କୁମ୍ଭାର ଇତ୍ୟାଦି ଅନେକ କ ଶଳ ଶିକ୍ଷା ଦିଆଯାଏ |", displayWidth/2 + 700,displayHeight/2  + 400);

  text("ବର୍ତ୍ତମାନ ବୋର୍ଡ ପରୀକ୍ଷା ଦୁଇଟି ସେମିଷ୍ଟରରେ ଅନୁଷ୍ଠିତ ହୁଏ |", displayWidth/2 + 900,displayHeight/2 + 10);

  text("ବିଦ୍ୟାଳୟରେ ଭାରତୀୟ ସଂସ୍କୃତି ଶିକ୍ଷା ଦିଆଯାଏ |", displayWidth/2 + 900,displayHeight/2 +300);

  text("ସଂପୂର୍ଣ୍ଣ ପାଠ୍ୟକ୍ରମ ପରେ ଯୋଗ୍ୟତା ପ୍ରଦାନ କରାଯାଏ ଏବଂ ପାଠ୍ୟକ୍ରମ ମଧ୍ୟରେ ପ୍ରମାଣପତ୍ର ଏବଂ ଡିପ୍ଲୋମା ପ୍ରଦାନ କରାଯାଏ |", displayWidth/2 + 1100,displayHeight/2 + 140);

  text("କଲେଜ ଆଡମିଶନ ପାଇଁ 12 ମାର୍କ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ନୁହେଁ, ଛାତ୍ରମାନେ ପ୍ରବେଶିକା ପରୀକ୍ଷା ଦେଇପାରିବେ |", displayWidth/2 + 800,displayHeight/2 - 200);

  text("ଦେୟ ସୀମିତ ଅଟେ |", displayWidth/2 + 300,displayHeight/2 + 400);

  text("ଛାତ୍ରମାନେ ଚାହୁଁଥିବା ଯେକ ଣସି ବିଷୟ ନେଇପାରିବେ |", displayWidth/2 + 1250,displayHeight/2 + 350);
  
}