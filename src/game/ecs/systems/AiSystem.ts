import { PositionComponent } from '@/game/ecs/components/PositionComponent';
import { AiComponent } from '@/game/ecs/components/AiComponent';
import { AiBehaviorType } from '@/game/ecs/components/AiComponent';

export class AiSystem {
  public update(
    entities: Array<{ position?: PositionComponent; ai?: AiComponent }>,
    delta: number
  ): void {
    for (const entity of entities) {
      if (!entity.ai || !entity.position) continue;

      switch (entity.ai.behavior) {
        case AiBehaviorType.IDLE:
          // Idle behavior
          break;
        case AiBehaviorType.PATROL:
          // Patrol behavior
          break;
        case AiBehaviorType.CHASE:
          // Chase target
          break;
        case AiBehaviorType.ATTACK:
          // Attack behavior
          break;
        case AiBehaviorType.FLEE:
          // Flee behavior
          break;
      }
    }
  }
}

export default AiSystem;
