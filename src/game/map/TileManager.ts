import * as PIXI from 'pixi.js';

export class TileManager {
  private tiles: Map<number, PIXI.Texture> = new Map();
  private container: PIXI.Container;

  constructor(container: PIXI.Container) {
    this.container = container;
  }

  public loadTileset(textures: Map<number, PIXI.Texture>): void {
    this.tiles = textures;
  }

  public renderMap(map: number[][], tileSize: number): void {
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        const tileId = map[y][x];
        const texture = this.tiles.get(tileId);
        if (texture) {
          const sprite = new PIXI.Sprite({ texture });
          sprite.x = x * tileSize;
          sprite.y = y * tileSize;
          this.container.addChild(sprite);
        }
      }
    }
  }
}

export default TileManager;
