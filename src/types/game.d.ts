/**
 * Game-specific type definitions
 */

export interface Position {
  x: number;
  y: number;
  z?: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Rectangle extends Position, Size {}

export interface GameEntity {
  id: string;
  type: string;
  position: Position;
  [key: string]: any;
}

export interface ItemDefinition {
  id: string;
  name: string;
  type: string;
  properties: Record<string, any>;
}

export interface EnemyDefinition {
  id: string;
  name: string;
  health: number;
  speed: number;
  behavior: string;
}

export interface LevelDefinition {
  id: string;
  name: string;
  map: number[][];
  enemies: EnemyDefinition[];
  items: ItemDefinition[];
}
