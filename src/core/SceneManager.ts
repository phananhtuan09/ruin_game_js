import { EventEmitter } from '@/core/EventEmitter';
import { Scene } from '@/core/Scene';

export class SceneManager {
  private eventEmitter: EventEmitter;
  private currentScene?: Scene;

  constructor(eventEmitter: EventEmitter) {
    this.eventEmitter = eventEmitter;
  }
  changeScene(scene: Scene): void {
     if(this.currentScene){
      this.currentScene.onExit();
      this.currentScene.dispose();
     }
     this.currentScene = scene;
     this.currentScene.onEnter();
  }
}
