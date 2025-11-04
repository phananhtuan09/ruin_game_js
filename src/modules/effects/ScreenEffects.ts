import * as PIXI from 'pixi.js';

export class ScreenEffects {
  private container: PIXI.Container;
  private shakeOffset: { x: number; y: number } = { x: 0, y: 0 };
  private fadeOverlay?: PIXI.Graphics;

  constructor(container: PIXI.Container) {
    this.container = container;
    console.log('✅ ScreenEffects initialized');
  }

  public shake(intensity: number, duration: number): void {
    let elapsed = 0;
    const updateShake = (delta: number) => {
      elapsed += delta;
      if (elapsed >= duration) {
        this.shakeOffset = { x: 0, y: 0 };
        return;
      }
      this.shakeOffset.x = (Math.random() - 0.5) * intensity;
      this.shakeOffset.y = (Math.random() - 0.5) * intensity;
    };
    // Would need to register updateShake with game loop
    console.log(`Screen shake: intensity ${intensity}, duration ${duration}`);
  }

  public fadeOut(duration: number, callback?: () => void): void {
    console.log(`Fade out: duration ${duration}`);
    if (callback) {
      setTimeout(callback, duration * 1000);
    }
  }

  public fadeIn(duration: number, callback?: () => void): void {
    console.log(`Fade in: duration ${duration}`);
    if (callback) {
      setTimeout(callback, duration * 1000);
    }
  }
}

export default ScreenEffects;
