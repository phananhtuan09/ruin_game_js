import { EventEmitter } from '@/core/EventEmitter';

export class SceneManager {
  private eventEmitter: EventEmitter;

  constructor(eventEmitter: EventEmitter) {
    this.eventEmitter = eventEmitter;
  }
}
