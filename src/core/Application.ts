import * as PIXI from 'pixi.js';

import { EventEmitter } from '@/core/EventEmitter';
import { SceneManager } from '@/core/SceneManager';
import { DIContainer } from '@/core/DIContainer';

export class Application {
  private static instance: Application;
  private pixiApp: PIXI.Application;
  private sceneManager: SceneManager;
  private eventEmitter: EventEmitter;
  private container: DIContainer;

  constructor() {
    if (Application.instance) {
      return Application.instance; // Singleton pattern
    }
    this.initializePixi();
    this.initializeManager();
    Application.instance = this;
  }

  private async initializePixi(): Promise<void> {
    this.pixiApp = new PIXI.Application();
    await this.pixiApp.init({
      width: 800,
      height: 600,
      backgroundColor: '#1099bb',
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      antialias: true,
    });

    document.body.appendChild(this.pixiApp.canvas);
    console.log('✅ PixiJS initialized');
  }
  private initializeManager(): void {
    this.container = new DIContainer();

    this.container.register('eventEmitter', () => new EventEmitter());
    this.container.register(
      'sceneManager',
      () => new SceneManager(this.container.get('eventEmitter'))
    );

    this.eventEmitter = this.container.get('eventEmitter');
    this.sceneManager = this.container.get('sceneManager');
  }

  public start(): void {
    console.log('Game started');
    this.createSimpleScene();
  }

  private createSimpleScene(): void {
    const text = new PIXI.Text({
      text: 'Hello World',
      style: {
        fontSize: 36,
        fontWeight: 'bold',
        fill: 0xffffff,
      },
    });

    text.x = 400 - text.width / 2;
    text.y = 300 - text.height / 2;

    this.pixiApp.stage.addChild(text);
  }
}
