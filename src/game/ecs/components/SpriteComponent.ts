export class SpriteComponent {
  public texture: string;
  public width: number;
  public height: number;
  public sprite?: any; // PIXI.Sprite sẽ được gán sau

  constructor(texture: string = '', width: number = 0, height: number = 0) {
    this.texture = texture;
    this.width = width;
    this.height = height;
  }
}

export default SpriteComponent;
