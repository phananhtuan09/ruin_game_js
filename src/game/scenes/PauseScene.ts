import * as PIXI from 'pixi.js';
import { Scene } from '@/core/Scene';

export class PauseScene extends Scene {
  private _stage: PIXI.Container;
  private _root: PIXI.Container;

  constructor(stage: PIXI.Container) {
    super();
    this._stage = stage;
    this._root = new PIXI.Container();
  }

  onEnter(): void {
    const text = new PIXI.Text({
      text: 'Paused',
      style: { fontSize: 36, fontWeight: 'bold', fill: 0xffff00 },
    });
    text.x = 400 - text.width / 2;
    text.y = 300 - text.height / 2;
    this._root.addChild(text);
    this._stage.addChild(this._root);
    console.log('PauseScene entered');
  }

  update(delta: number): void {
    // Pause logic (usually no update needed)
  }

  onExit(): void {
    this._stage.removeChild(this._root);
    console.log('PauseScene exited');
  }

  dispose(): void {
    this._root.destroy({ children: true });
  }
}

export default PauseScene;
