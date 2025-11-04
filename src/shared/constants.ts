export const TILE_SIZE = 32;
export const MAP_WIDTH = 100;
export const MAP_HEIGHT = 100;

export const MAX_ENTITIES = 1000;
export const MAX_HEALTH = 100;

export enum GameState {
  MENU = 'menu',
  PLAYING = 'playing',
  PAUSED = 'paused',
  GAME_OVER = 'game_over',
  VICTORY = 'victory',
}

export enum EntityType {
  PLAYER = 'player',
  ENEMY = 'enemy',
  ITEM = 'item',
  NPC = 'npc',
}
