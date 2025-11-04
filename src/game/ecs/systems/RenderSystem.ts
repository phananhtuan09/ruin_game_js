import { PositionComponent } from '@/game/ecs/components/PositionComponent';
import { SpriteComponent } from '@/game/ecs/components/SpriteComponent';

export class RenderSystem {
  public update(entities: Array<{ position?: PositionComponent; sprite?: SpriteComponent }>, container: any): void {
    for (const entity of entities) {
      if (entity.position && entity.sprite && entity.sprite.sprite) {
        entity.sprite.sprite.x = entity.position.x;
        entity.sprite.sprite.y = entity.position.y;
      }
    }
  }
}

export default RenderSystem;
