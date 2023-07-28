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

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
  {
    name: 'idle',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  }
];
animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  }
  for (let j = 0; j < state.frames; j++){
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({x: positionX, y: positionY});
  }
  spriteAnimations[state.name] = frames;
});
console.log(animationStates);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations['jump'].loc.length;
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations['jump'].loc[position].y;
  ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 
    0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  gameFrame++;
  requestAnimationFrame(animate);
};

animate();