export class PhysicsManager {
  private gravity: number = 9.8;

  constructor(gravity: number = 9.8) {
    this.gravity = gravity;
    console.log('✅ PhysicsManager initialized');
  }

  public update(delta: number): void {
    // Physics simulation step
  }

  public setGravity(value: number): void {
    this.gravity = value;
  }

  public getGravity(): number {
    return this.gravity;
  }
}

export default PhysicsManager;
