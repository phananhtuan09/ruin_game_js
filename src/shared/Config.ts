export interface GameConfig {
  width: number;
  height: number;
  tileSize: number;
  debug: boolean;
  musicVolume: number;
  sfxVolume: number;
}

export const defaultConfig: GameConfig = {
  width: 800,
  height: 600,
  tileSize: 32,
  debug: false,
  musicVolume: 0.7,
  sfxVolume: 0.8,
};

export class Config {
  private static instance: Config;
  private config: GameConfig;

  private constructor() {
    this.config = { ...defaultConfig };
    // Load from localStorage if available
    const saved = localStorage.getItem('ruin_game_config');
    if (saved) {
      try {
        this.config = { ...defaultConfig, ...JSON.parse(saved) };
      } catch (e) {
        console.warn('Failed to load config:', e);
      }
    }
  }

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  public get<K extends keyof GameConfig>(key: K): GameConfig[K] {
    return this.config[key];
  }

  public set<K extends keyof GameConfig>(key: K, value: GameConfig[K]): void {
    this.config[key] = value;
    localStorage.setItem('ruin_game_config', JSON.stringify(this.config));
  }

  public getAll(): GameConfig {
    return { ...this.config };
  }

  public reset(): void {
    this.config = { ...defaultConfig };
    localStorage.removeItem('ruin_game_config');
  }
}

export default Config;
