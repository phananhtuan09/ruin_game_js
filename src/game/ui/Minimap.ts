import * as PIXI from 'pixi.js';

export class Minimap {
  private container: PIXI.Container;
  private mapGraphics: PIXI.Graphics;
  private visible: boolean = false;

  constructor(container: PIXI.Container) {
    this.container = container;
    this.mapGraphics = new PIXI.Graphics();
    this.mapGraphics.x = container.width - 150;
    this.mapGraphics.y = 10;
  }

  public toggle(): void {
    this.visible = !this.visible;
    if (this.visible) {
      this.container.addChild(this.mapGraphics);
    } else {
      this.container.removeChild(this.mapGraphics);
    }
  }

  public update(map: number[][], playerX: number, playerY: number): void {
    if (!this.visible) return;

    this.mapGraphics.clear();
    // Draw minimap
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        if (map[y][x] === 1) {
          this.mapGraphics.rect(x * 2, y * 2, 2, 2);
          this.mapGraphics.fill(0x888888);
        }
      }
    }
    // Draw player position
    this.mapGraphics.circle(playerX * 2, playerY * 2, 3);
    this.mapGraphics.fill(0x00ff00);
  }
}

export default Minimap;
