import * as PIXI from 'pixi.js';

export class InventoryPanel {
  private container: PIXI.Container;
  private panel?: PIXI.Graphics;
  private visible: boolean = false;

  constructor(container: PIXI.Container) {
    this.container = container;
  }

  public toggle(): void {
    this.visible = !this.visible;
    if (this.visible) {
      this.show();
    } else {
      this.hide();
    }
  }

  private show(): void {
    if (this.panel) return;

    this.panel = new PIXI.Graphics();
    this.panel.rect(100, 100, 400, 300);
    this.panel.fill({ color: 0x333333, alpha: 0.9 });
    this.container.addChild(this.panel);

    const text = new PIXI.Text({
      text: 'Inventory',
      style: { fontSize: 24, fill: 0xffffff },
    });
    text.x = 300 - text.width / 2;
    text.y = 120;
    this.panel.addChild(text);
  }

  private hide(): void {
    if (this.panel) {
      this.container.removeChild(this.panel);
      this.panel.destroy();
      this.panel = undefined;
    }
  }

  public updateItems(items: string[]): void {
    // Update inventory display
  }
}

export default InventoryPanel;
