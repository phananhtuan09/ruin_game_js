export class FieldOfViewComponent {
  public range: number;
  public angle: number; // In degrees
  public revealed: boolean[][]; // Grid of revealed tiles

  constructor(range: number = 5, angle: number = 360) {
    this.range = range;
    this.angle = angle;
    this.revealed = [];
  }
}

export default FieldOfViewComponent;
