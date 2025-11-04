/**
 * Event system type definitions
 */

export interface GameEvent {
  type: string;
  timestamp: number;
  data?: any;
  source?: string;
}

export interface EventPayload {
  [key: string]: any;
}

export type EventHandler = (event: GameEvent) => void;
export type EventListener = (data?: any) => void;

// Game-specific event types
export enum GameEventType {
  // Player events
  PLAYER_MOVED = 'player:moved',
  PLAYER_HEALTH_CHANGED = 'player:health:changed',
  PLAYER_DIED = 'player:died',
  PLAYER_LEVEL_UP = 'player:level:up',

  // Enemy events
  ENEMY_SPAWNED = 'enemy:spawned',
  ENEMY_DIED = 'enemy:died',

  // Item events
  ITEM_PICKED_UP = 'item:picked_up',
  ITEM_USED = 'item:used',

  // Game events
  GAME_STARTED = 'game:started',
  GAME_PAUSED = 'game:paused',
  GAME_RESUMED = 'game:resumed',
  GAME_OVER = 'game:over',
  LEVEL_COMPLETE = 'level:complete',
}
