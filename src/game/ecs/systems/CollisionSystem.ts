import { PositionComponent } from '@/game/ecs/components/PositionComponent';
import { CollisionComponent } from '@/game/ecs/components/CollisionComponent';

export class CollisionSystem {
  public update(
    entities: Array<{ position?: PositionComponent; collision?: CollisionComponent }>,
    delta: number
  ): void {
    // Simple AABB collision detection
    for (let i = 0; i < entities.length; i++) {
      const entityA = entities[i];
      if (!entityA.position || !entityA.collision) continue;

      for (let j = i + 1; j < entities.length; j++) {
        const entityB = entities[j];
        if (!entityB.position || !entityB.collision) continue;

        if (this.checkCollision(entityA, entityB)) {
          // Handle collision
          console.log('Collision detected');
        }
      }
    }
  }

  private checkCollision(
    a: { position: PositionComponent; collision: CollisionComponent },
    b: { position: PositionComponent; collision: CollisionComponent }
  ): boolean {
    return (
      a.position.x < b.position.x + b.collision.width &&
      a.position.x + a.collision.width > b.position.x &&
      a.position.y < b.position.y + b.collision.height &&
      a.position.y + a.collision.height > b.position.y
    );
  }
}

export default CollisionSystem;
