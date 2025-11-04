export class VelocityComponent {
  public vx: number;
  public vy: number;
  public speed: number;

  constructor(vx: number = 0, vy: number = 0, speed: number = 0) {
    this.vx = vx;
    this.vy = vy;
    this.speed = speed;
  }
}

export default VelocityComponent;
