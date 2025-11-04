import { PositionComponent } from '@/game/ecs/components/PositionComponent';
import { VelocityComponent } from '@/game/ecs/components/VelocityComponent';

export class MovementSystem {
  public update(entities: Array<{ position?: PositionComponent; velocity?: VelocityComponent }>, delta: number): void {
    for (const entity of entities) {
      if (entity.position && entity.velocity) {
        entity.position.x += entity.velocity.vx * delta;
        entity.position.y += entity.velocity.vy * delta;
      }
    }
  }
}

export default MovementSystem;
