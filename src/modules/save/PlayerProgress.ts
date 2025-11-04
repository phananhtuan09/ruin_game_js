export class PlayerProgress {
  public level: number = 1;
  public experience: number = 0;
  public totalPlayTime: number = 0;
  public deaths: number = 0;
  public kills: number = 0;

  constructor() {
    console.log('✅ PlayerProgress initialized');
  }

  public addExperience(amount: number): void {
    this.experience += amount;
    // Level up logic
    const expForNextLevel = this.level * 100;
    if (this.experience >= expForNextLevel) {
      this.level++;
      this.experience -= expForNextLevel;
      console.log(`Level up! Now level ${this.level}`);
    }
  }

  public incrementKills(): void {
    this.kills++;
  }

  public incrementDeaths(): void {
    this.deaths++;
  }

  public updatePlayTime(delta: number): void {
    this.totalPlayTime += delta;
  }
}

export default PlayerProgress;
