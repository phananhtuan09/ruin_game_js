export class TimeManager {
  private deltaTime: number = 0;
  private scale: number = 1;

  constructor(){
    this.deltaTime = 0;
    this.scale = 1;
  }
  public tick(delta: number): void {
    this.deltaTime = delta;
  }
}