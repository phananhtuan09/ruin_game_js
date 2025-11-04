import * as PIXI from 'pixi.js';

export class HUD {
  private container: PIXI.Container;
  private healthBar?: PIXI.Graphics;
  private scoreText?: PIXI.Text;

  constructor(container: PIXI.Container) {
    this.container = container;
  }

  public init(): void {
    // Create health bar
    this.healthBar = new PIXI.Graphics();
    this.healthBar.rect(10, 10, 200, 20);
    this.healthBar.fill(0xff0000);
    this.container.addChild(this.healthBar);

    // Create score text
    this.scoreText = new PIXI.Text({
      text: 'Score: 0',
      style: { fontSize: 24, fill: 0xffffff },
    });
    this.scoreText.x = 10;
    this.scoreText.y = 40;
    this.container.addChild(this.scoreText);
  }

  public updateHealth(current: number, max: number): void {
    if (!this.healthBar) return;
    const percentage = current / max;
    this.healthBar.clear();
    this.healthBar.rect(10, 10, 200 * percentage, 20);
    this.healthBar.fill(0xff0000);
  }

  public updateScore(score: number): void {
    if (this.scoreText) {
      this.scoreText.text = `Score: ${score}`;
    }
  }
}

export default HUD;
