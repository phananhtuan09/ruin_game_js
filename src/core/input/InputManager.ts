export class InputManager {
  private _keyStates: Map<string, boolean> = new Map();
  private _mousePosition: { x: number; y: number } = { x: 0, y: 0 };
  private _mouseButtons: Map<number, boolean> = new Map();

  constructor() {
    this._setupEventListeners();
    console.log('✅ InputManager initialized');
  }

  private _setupEventListeners(): void {
    window.addEventListener('keydown', (e) => this._onKeyDown(e));
    window.addEventListener('keyup', (e) => this._onKeyUp(e));
    window.addEventListener('mousemove', (e) => this._onMouseMove(e));
    window.addEventListener('mousedown', (e) => this._onMouseDown(e));
    window.addEventListener('mouseup', (e) => this._onMouseUp(e));
  }

  private _onKeyDown(event: KeyboardEvent): void {
    this._keyStates.set(event.key, true);
  }

  private _onKeyUp(event: KeyboardEvent): void {
    this._keyStates.set(event.key, false);
  }

  private _onMouseMove(event: MouseEvent): void {
    this._mousePosition = { x: event.clientX, y: event.clientY };
  }

  private _onMouseDown(event: MouseEvent): void {
    this._mouseButtons.set(event.button, true);
  }

  private _onMouseUp(event: MouseEvent): void {
    this._mouseButtons.set(event.button, false);
  }

  public isKeyPressed(key: string): boolean {
    return this._keyStates.get(key) ?? false;
  }

  public getMousePosition(): { x: number; y: number } {
    return { ...this._mousePosition };
  }

  public isMouseButtonPressed(button: number): boolean {
    return this._mouseButtons.get(button) ?? false;
  }
}

export default InputManager;
