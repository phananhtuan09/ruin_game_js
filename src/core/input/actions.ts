export enum InputAction {
  MOVE_UP = 'move_up',
  MOVE_DOWN = 'move_down',
  MOVE_LEFT = 'move_left',
  MOVE_RIGHT = 'move_right',
  ATTACK = 'attack',
  INTERACT = 'interact',
  INVENTORY = 'inventory',
  PAUSE = 'pause',
}

export interface InputActionMapping {
  [key: string]: InputAction;
}

export const DEFAULT_KEY_MAPPINGS: InputActionMapping = {
  KeyW: InputAction.MOVE_UP,
  ArrowUp: InputAction.MOVE_UP,
  KeyS: InputAction.MOVE_DOWN,
  ArrowDown: InputAction.MOVE_DOWN,
  KeyA: InputAction.MOVE_LEFT,
  ArrowLeft: InputAction.MOVE_LEFT,
  KeyD: InputAction.MOVE_RIGHT,
  ArrowRight: InputAction.MOVE_RIGHT,
  Space: InputAction.ATTACK,
  KeyE: InputAction.INTERACT,
  Tab: InputAction.INVENTORY,
  Escape: InputAction.PAUSE,
};

export function getActionForKey(key: string): InputAction | undefined {
  return DEFAULT_KEY_MAPPINGS[key];
}
