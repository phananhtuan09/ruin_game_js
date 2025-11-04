export class Objective {
  public id: string;
  public description: string;
  public completed: boolean;
  public progress: number;
  public target: number;

  constructor(id: string, description: string, target: number = 1) {
    this.id = id;
    this.description = description;
    this.completed = false;
    this.progress = 0;
    this.target = target;
  }

  public updateProgress(amount: number): void {
    this.progress = Math.min(this.progress + amount, this.target);
    if (this.progress >= this.target) {
      this.completed = true;
    }
  }
}

export default Objective;
