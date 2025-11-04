export class AudioManager {
  private sounds: Map<string, any> = new Map();
  private musicVolume: number = 1.0;
  private sfxVolume: number = 1.0;

  constructor() {
    console.log('✅ AudioManager initialized');
  }

  public playSound(name: string, volume?: number): void {
    const sound = this.sounds.get(name);
    if (sound) {
      const vol = volume ?? this.sfxVolume;
      console.log(`Playing sound: ${name} at volume ${vol}`);
    }
  }

  public playMusic(name: string, loop: boolean = true): void {
    console.log(`Playing music: ${name}, loop: ${loop}`);
  }

  public stopMusic(): void {
    console.log('Stopping music');
  }

  public setMusicVolume(volume: number): void {
    this.musicVolume = Math.max(0, Math.min(1, volume));
  }

  public setSfxVolume(volume: number): void {
    this.sfxVolume = Math.max(0, Math.min(1, volume));
  }
}

export default AudioManager;
