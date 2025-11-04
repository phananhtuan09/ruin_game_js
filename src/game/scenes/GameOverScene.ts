import * as PIXI from 'pixi.js';
import { Scene } from '@/core/Scene';

export class GameOverScene extends Scene {
  private _stage: PIXI.Container;
  private _root: PIXI.Container;

  constructor(stage: PIXI.Container) {
    super();
    this._stage = stage;
    this._root = new PIXI.Container();
  }

  onEnter(): void {
    const text = new PIXI.Text({
      text: 'Game Over',
      style: { fontSize: 48, fontWeight: 'bold', fill: 0xff0000 },
    });
    text.x = 400 - text.width / 2;
    text.y = 300 - text.height / 2;
    this._root.addChild(text);
    this._stage.addChild(this._root);
    console.log('GameOverScene entered');
  }

  update(delta: number): void {
    // Game over logic
  }

  onExit(): void {
    this._stage.removeChild(this._root);
    console.log('GameOverScene exited');
  }

  dispose(): void {
    this._root.destroy({ children: true });
  }
}

export default GameOverScene;
