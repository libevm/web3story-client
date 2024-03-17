import type { Spritesheet, SpritesheetData } from "pixi.js";

export const getTexturesByPrefix = (
  t: Spritesheet<SpritesheetData>,
  prefix: string
) => {
  const frames = Object.keys(t.textures);
  frames.sort();

  return frames.filter((x) => x.startsWith(prefix)).map((x) => t.textures[x]);
};
