import { Application, Assets, AnimatedSprite, Texture, type SpriteSheetJson, Spritesheet, type SpritesheetData } from "pixi.js";

(async () => {
  // Create a new application and resize to window size
  const app = new Application();
  await app.init({ resizeTo: window });

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);

  // Preload assets
  // Load the animation sprite sheet
  const characterAssets: Spritesheet<SpritesheetData> = await Assets.load("assets/character/001.json");
  const faceAssets: Spritesheet<SpritesheetData> = await Assets.load("assets/face/001.json");

  // Character
  const charFrames = []
  for (let i = 0; i < 4; i++) {
    charFrames.push(characterAssets.textures[`walk_0_${i}.png`]);
  }
  const charAnim = new AnimatedSprite(charFrames);
  charAnim.x = app.screen.width / 2;
  charAnim.y = app.screen.height / 2;
  charAnim.anchor.set(0.5);
  charAnim.animationSpeed = 0.075;
  charAnim.play();

  // Face
  const faceFrames = []
  for (let i = 0; i < 4; i++) {
    faceFrames.push(faceAssets.textures[`walk1_${i}.png`]);
  }
  const faceAnim = new AnimatedSprite(faceFrames);
  faceAnim.x = app.screen.width / 2;
  faceAnim.y = app.screen.height / 2;
  faceAnim.anchor.set(0.5);
  faceAnim.animationSpeed = 0.075;
  faceAnim.play();

  app.stage.addChild(charAnim);
  app.stage.addChild(faceAnim);

  // Animate the rotation
  //   app.ticker.add(() =>
  //   {
  //       anim.rotation += 0.01;
  //   });
})();
