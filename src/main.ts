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

  console.log('characterAssets', characterAssets)

  // Create an array of textures from the sprite sheet
  const frames = [];

  for (let i = 0; i < 4; i++) {
    // Magically works since the spritesheet was loaded with the pixi loader
    frames.push(characterAssets.textures[`walk_0_${i}.png`]);
  }

  // Create an AnimatedSprite (brings back memories from the days of Flash, right ?)
  const anim = new AnimatedSprite(frames);

  /*
   * An AnimatedSprite inherits all the properties of a PIXI sprite
   * so you can change its position, its anchor, mask it, etc
   */
  anim.x = app.screen.width / 2;
  anim.y = app.screen.height / 2;
  anim.anchor.set(0.5);
  anim.animationSpeed = 0.075;
  anim.play();

  app.stage.addChild(anim);

  // Animate the rotation
  //   app.ticker.add(() =>
  //   {
  //       anim.rotation += 0.01;
  //   });
})();
