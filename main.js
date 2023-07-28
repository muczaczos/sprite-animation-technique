const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";

//spreedsheet width is 6786 and has 12 columns. 6876 / 12 = 573
//I use 575 because the last frame is a bit smaller 
const spriteWidth = 575; 

//spreedsheet height is 5230 and has 10 columns. 5230 / 10 = 523
const spriteHeight = 523;

let frameX = 0;
let frameY = 0;


function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //ctx.fillRect(100,50,100,100);
  /*
  ctx.drawImage(image, source-x, source-y, 
  source-width, source-height, destonation-x, 
  destonation-y, destonation-width, destonation-height)
  By changing source-x argument you can travel in spreedsheet horyzontaly. 
  0 * spriteWidth, 1 * spriteWidth etc.
  By changing source-y argument you can travel spreedsheet verticaly. 
  0 * spriteHeight, 1 * spriteHeight etc. 
  */
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, 
    spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  requestAnimationFrame(animate);
};

animate();