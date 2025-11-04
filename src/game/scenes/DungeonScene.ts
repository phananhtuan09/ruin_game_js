import * as PIXI from 'pixi.js';
import { Scene } from '@/core/Scene';

export class DungeonScene extends Scene {
  private _stage: PIXI.Container;
  private _root: PIXI.Container;

  constructor(stage: PIXI.Container) {
    super();
    this._stage = stage;
    this._root = new PIXI.Container();
  }

  onEnter(): void {
    this._stage.addChild(this._root);
    console.log('DungeonScene entered');
  }

  update(delta: number): void {
    // Game loop logic
  }

  onExit(): void {
    this._stage.removeChild(this._root);
    console.log('DungeonScene exited');
  }

  dispose(): void {
    this._root.destroy({ children: true });
  }
}

export default DungeonScene;
