import * as PIXI from 'pixi.js';

import { EventEmitter } from '@/core/EventEmitter';
import { SceneManager } from '@/core/SceneManager';
import { DIContainer } from '@/core/DIContainer';
import { TimeManager } from '@/core/TimeManager';
import { MainScene } from '@/game/scenes/MainScene';

 class Application {
  private static instance: Application;
  private _pixiApp: PIXI.Application;
  private _sceneManager: SceneManager;
  private _eventEmitter: EventEmitter;
  private _container: DIContainer;
  private _timeManager: TimeManager;

  constructor() {
    if (Application.instance) {
      return Application.instance; // Singleton pattern
    }
    this.initializePixi();
    this.initializeManager();
    Application.instance = this;
  }

  private async initializePixi(): Promise<void> {
    this._pixiApp = new PIXI.Application();
    await this._pixiApp.init({
      width: 800,
      height: 600,
      backgroundColor: '#1099bb',
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      antialias: true,
    });

    this._pixiApp.ticker.add((delta: number) => {
      this._timeManager.tick(delta)
    })

    document.body.appendChild(this._pixiApp.canvas);
    console.log('✅ PixiJS initialized');
  }
  private initializeManager(): void {
    this._container = new DIContainer();

    this._container.register('eventEmitter', () => new EventEmitter());
    this._container.register(
      'sceneManager',
      () => new SceneManager(this._container.get('eventEmitter'))
    );
    this._container.register('timeManager', () => new TimeManager());
    this._eventEmitter = this._container.get('eventEmitter');
    this._sceneManager = this._container.get('sceneManager');
    this._timeManager = this._container.get('timeManager'); 
  }

  public start(): void {
    console.log('Game started');
    this._sceneManager.changeScene(new MainScene(this._pixiApp.stage))
  }
}

export default Application;