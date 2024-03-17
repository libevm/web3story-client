import {
  Application,
  Assets,
  AnimatedSprite,
  Spritesheet,
  type SpritesheetData,
} from "pixi.js";
import { getTexturesByPrefix } from "./utils";

(async () => {
  // Create a new application and resize to window size
  const app = new Application();
  await app.init({ resizeTo: window });

  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);

  // Preload assets
  const characterAssets: Spritesheet<SpritesheetData> = await Assets.load(
    "assets/character/001.json"
  );
  const faceAssets: Spritesheet<SpritesheetData> = await Assets.load(
    "assets/face/001.json"
  );

  // Character
  const charAnim = new AnimatedSprite(
    getTexturesByPrefix(characterAssets, "walk")
  );
  charAnim.x = app.screen.width / 2;
  charAnim.y = app.screen.height / 2;
  charAnim.anchor.set(0.5);
  charAnim.animationSpeed = 0.075;
  charAnim.play();

  // Face
  const faceAnim = new AnimatedSprite(getTexturesByPrefix(faceAssets, "walk"));
  faceAnim.x = app.screen.width / 2;
  faceAnim.y = app.screen.height / 2;
  faceAnim.anchor.set(0.5);
  faceAnim.animationSpeed = 0.075;
  faceAnim.play();

  // Input
  let gameSelected = true;
  app.canvas.addEventListener("click", () => {
    gameSelected = true;
  });

  document.addEventListener("click", (event) => {
    if (event.target !== app.canvas) {
      gameSelected = false;
    }
  });

  document.addEventListener(
    "keydown", // Function to handle the keydown event
    function onKeyboardDown(event) {
      event.preventDefault();

      // Implement keyboard logic here
      if (gameSelected) {
        if (event.key === "ArrowLeft") {
          charAnim.x -= 1;
          faceAnim.x -= 1;
        }
        if (event.key === "ArrowRight") {
          charAnim.x += 1;
          faceAnim.x += 1;
        }
        if (event.key === "ArrowUp") {
          charAnim.y -= 1;
          faceAnim.y -= 1;
        }
        if (event.key === "ArrowDown") {
          charAnim.y += 1;
          faceAnim.y += 1;
        }
      }
    }
  );

  // Add and remove AnimatedSpriteSheets into the app
  app.stage.addChild(charAnim);
  app.stage.addChild(faceAnim);
})();
