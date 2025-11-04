import * as PIXI from 'pixi.js';
import { Scene } from '@/core/Scene';

export class VictoryScene extends Scene {
  private _stage: PIXI.Container;
  private _root: PIXI.Container;

  constructor(stage: PIXI.Container) {
    super();
    this._stage = stage;
    this._root = new PIXI.Container();
  }

  onEnter(): void {
    const text = new PIXI.Text({
      text: 'Victory!',
      style: { fontSize: 48, fontWeight: 'bold', fill: 0x00ff00 },
    });
    text.x = 400 - text.width / 2;
    text.y = 300 - text.height / 2;
    this._root.addChild(text);
    this._stage.addChild(this._root);
    console.log('VictoryScene entered');
  }

  update(delta: number): void {
    // Victory logic
  }

  onExit(): void {
    this._stage.removeChild(this._root);
    console.log('VictoryScene exited');
  }

  dispose(): void {
    this._root.destroy({ children: true });
  }
}

export default VictoryScene;
