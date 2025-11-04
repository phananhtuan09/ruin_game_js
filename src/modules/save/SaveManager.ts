export interface SaveData {
  version: string;
  timestamp: number;
  data: Record<string, any>;
}

export class SaveManager {
  private saveKey: string = 'ruin_game_save';

  constructor() {
    console.log('✅ SaveManager initialized');
  }

  public save(data: Record<string, any>): void {
    const saveData: SaveData = {
      version: '1.0.0',
      timestamp: Date.now(),
      data,
    };
    localStorage.setItem(this.saveKey, JSON.stringify(saveData));
    console.log('Game saved');
  }

  public load(): SaveData | null {
    const saved = localStorage.getItem(this.saveKey);
    if (!saved) return null;

    try {
      return JSON.parse(saved) as SaveData;
    } catch (e) {
      console.error('Failed to load save:', e);
      return null;
    }
  }

  public hasSave(): boolean {
    return localStorage.getItem(this.saveKey) !== null;
  }

  public deleteSave(): void {
    localStorage.removeItem(this.saveKey);
    console.log('Save deleted');
  }
}

export default SaveManager;
