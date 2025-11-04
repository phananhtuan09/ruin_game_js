export class HealthComponent {
  public current: number;
  public max: number;

  constructor(max: number = 100) {
    this.max = max;
    this.current = max;
  }
}

export default HealthComponent;
