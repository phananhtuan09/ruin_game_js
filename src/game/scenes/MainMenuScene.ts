import * as PIXI from 'pixi.js';
import { Scene } from '@/core/Scene';

export class MainMenuScene extends Scene {
  private _stage: PIXI.Container;
  private _root: PIXI.Container;

  constructor(stage: PIXI.Container) {
    super();
    this._stage = stage;
    this._root = new PIXI.Container();
  }

  onEnter(): void {
    const text = new PIXI.Text({
      text: 'Ruin Game',
      style: { fontSize: 48, fontWeight: 'bold', fill: 0xffffff },
    });
    text.x = 400 - text.width / 2;
    text.y = 200;
    this._root.addChild(text);
    this._stage.addChild(this._root);
    console.log('MainMenuScene entered');
  }

  update(delta: number): void {
    // Menu logic
  }

  onExit(): void {
    this._stage.removeChild(this._root);
    console.log('MainMenuScene exited');
  }

  dispose(): void {
    this._root.destroy({ children: true });
  }
}

export default MainMenuScene;
