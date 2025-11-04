export class SpatialAudio {
  private listenerPosition: { x: number; y: number } = { x: 0, y: 0 };

  constructor() {
    console.log('✅ SpatialAudio initialized');
  }

  public setListenerPosition(x: number, y: number): void {
    this.listenerPosition = { x, y };
  }

  public playSound(name: string, x: number, y: number, volume: number = 1.0): void {
    const distance = Math.sqrt(
      Math.pow(x - this.listenerPosition.x, 2) + Math.pow(y - this.listenerPosition.y, 2)
    );
    const attenuatedVolume = volume / (1 + distance * 0.1);
    console.log(`Playing spatial sound: ${name} at (${x}, ${y}), volume: ${attenuatedVolume}`);
  }
}

export default SpatialAudio;
