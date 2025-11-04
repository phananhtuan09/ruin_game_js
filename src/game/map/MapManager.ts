export class MapManager {
  private currentMap: number[][];
  private tileSize: number;

  constructor(tileSize: number = 32) {
    this.tileSize = tileSize;
    this.currentMap = [];
  }

  public loadMap(map: number[][]): void {
    this.currentMap = map;
  }

  public getTile(x: number, y: number): number {
    const tileX = Math.floor(x / this.tileSize);
    const tileY = Math.floor(y / this.tileSize);
    if (this.currentMap[tileY] && this.currentMap[tileY][tileX] !== undefined) {
      return this.currentMap[tileY][tileX];
    }
    return 1; // Wall by default
  }

  public isWalkable(x: number, y: number): boolean {
    return this.getTile(x, y) === 0;
  }
}

export default MapManager;
