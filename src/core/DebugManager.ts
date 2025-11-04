export class DebugManager {
  private _enabled: boolean = false;
  private _overlays: Map<string, any> = new Map();

  constructor(enabled: boolean = false) {
    this._enabled = enabled;
    console.log('✅ DebugManager initialized');
  }

  public enable(): void {
    this._enabled = true;
    console.log('Debug mode enabled');
  }

  public disable(): void {
    this._enabled = false;
    console.log('Debug mode disabled');
  }

  public isEnabled(): boolean {
    return this._enabled;
  }

  public showBoundingBox(entity: any): void {
    if (!this._enabled) return;
    console.log('Showing bounding box for entity:', entity);
  }

  public log(message: string, data?: any): void {
    if (!this._enabled) return;
    console.log(`[DEBUG] ${message}`, data ?? '');
  }
}

export default DebugManager;
