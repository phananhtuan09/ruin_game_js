export class MapGenerator {
  private width: number;
  private height: number;

  constructor(width: number = 100, height: number = 100) {
    this.width = width;
    this.height = height;
  }

  public generate(): number[][] {
    // Generate procedural dungeon
    const map: number[][] = [];
    for (let y = 0; y < this.height; y++) {
      map[y] = [];
      for (let x = 0; x < this.width; x++) {
        map[y][x] = Math.random() > 0.7 ? 1 : 0; // 1 = wall, 0 = floor
      }
    }
    return map;
  }
}

export default MapGenerator;
