import * as PIXI from 'pixi.js';

export class DialogueBox {
  private container: PIXI.Container;
  private box?: PIXI.Graphics;
  private text?: PIXI.Text;
  private visible: boolean = false;

  constructor(container: PIXI.Container) {
    this.container = container;
  }

  public show(message: string, speaker?: string): void {
    if (this.box) return;

    this.visible = true;
    this.box = new PIXI.Graphics();
    this.box.rect(50, 400, 700, 150);
    this.box.fill({ color: 0x000000, alpha: 0.8 });
    this.container.addChild(this.box);

    const displayText = speaker ? `${speaker}: ${message}` : message;
    this.text = new PIXI.Text({
      text: displayText,
      style: { fontSize: 18, fill: 0xffffff, wordWrap: true, wordWrapWidth: 680 },
    });
    this.text.x = 70;
    this.text.y = 420;
    this.box.addChild(this.text);
  }

  public hide(): void {
    if (this.box) {
      this.container.removeChild(this.box);
      this.box.destroy();
      delete this.box;
      delete this.text;
      this.visible = false;
    }
  }

  public isVisible(): boolean {
    return this.visible;
  }
}

export default DialogueBox;
