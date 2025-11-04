export class CollisionComponent {
  public width: number;
  public height: number;
  public offsetX: number;
  public offsetY: number;

  constructor(width: number = 0, height: number = 0, offsetX: number = 0, offsetY: number = 0) {
    this.width = width;
    this.height = height;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}

export default CollisionComponent;
