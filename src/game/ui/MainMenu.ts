import * as PIXI from 'pixi.js';

export class MainMenu {
  private container: PIXI.Container;
  private buttons: PIXI.Graphics[] = [];

  constructor(container: PIXI.Container) {
    this.container = container;
  }

  public init(): void {
    // Create menu buttons
    const buttonLabels = ['Start Game', 'Options', 'Quit'];
    buttonLabels.forEach((label, index) => {
      const button = new PIXI.Graphics();
      button.rect(300, 200 + index * 60, 200, 50);
      button.fill(0x444444);

      const text = new PIXI.Text({
        text: label,
        style: { fontSize: 20, fill: 0xffffff },
      });
      text.x = 400 - text.width / 2;
      text.y = 225 + index * 60 - text.height / 2;
      button.addChild(text);

      this.buttons.push(button);
      this.container.addChild(button);
    });
  }

  public onButtonClick(buttonIndex: number, callback: () => void): void {
    if (this.buttons[buttonIndex]) {
      this.buttons[buttonIndex].eventMode = 'static';
      this.buttons[buttonIndex].cursor = 'pointer';
      this.buttons[buttonIndex].on('pointerdown', callback);
    }
  }
}

export default MainMenu;
