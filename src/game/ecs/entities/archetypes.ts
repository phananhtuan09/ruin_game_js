import { PositionComponent } from '@/game/ecs/components/PositionComponent';
import { VelocityComponent } from '@/game/ecs/components/VelocityComponent';
import { SpriteComponent } from '@/game/ecs/components/SpriteComponent';
import { HealthComponent } from '@/game/ecs/components/HealthComponent';

export interface Entity {
  id: string;
  position?: PositionComponent;
  velocity?: VelocityComponent;
  sprite?: SpriteComponent;
  health?: HealthComponent;
  [key: string]: any;
}

export function createPlayer(x: number, y: number): Entity {
  return {
    id: `player_${Date.now()}`,
    position: new PositionComponent(x, y),
    velocity: new VelocityComponent(0, 0, 100),
    sprite: new SpriteComponent('player', 32, 32),
    health: new HealthComponent(100),
  };
}

export function createEnemy(x: number, y: number): Entity {
  return {
    id: `enemy_${Date.now()}`,
    position: new PositionComponent(x, y),
    velocity: new VelocityComponent(0, 0, 50),
    sprite: new SpriteComponent('enemy', 32, 32),
    health: new HealthComponent(50),
  };
}
