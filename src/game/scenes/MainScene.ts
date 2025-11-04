import * as PIXI from 'pixi.js';
import  {Scene} from '@/core/Scene';

export class MainScene extends Scene {
    private app: PIXI.Application;
    private _root: PIXI.Container;
    private _text?: PIXI.Text;
    private _stage: PIXI.Container;

    constructor(stage: PIXI.Container) {
        super();
        this._stage = stage;
        this._root = new PIXI.Container();
    }

    onEnter(): void {
        this._text = new PIXI.Text({
            text: 'Hello world',
            style: {fontSize: 36, fontWeight: 'bold', fill: 0xffffff},
        })
        this._text.x = 400 - this._text.width / 2;
        this._text.y = 300 - this._text.height/ 2;
        this._root.addChild(this._text);
        this._stage.addChild(this._root);
    }
    update(dt: number): void {

    }

    onExit(): void {
        this._stage.removeChild(this._root);
    }
    dispose(): void {
        this._root.destroy({ children : true});
        this._text = undefined;
    }
}