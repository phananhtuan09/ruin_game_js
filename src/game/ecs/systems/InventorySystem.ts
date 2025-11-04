import { PositionComponent } from '@/game/ecs/components/PositionComponent';
import { InventoryComponent } from '@/game/ecs/components/InventoryComponent';

export class InventorySystem {
  public update(
    entities: Array<{ position?: PositionComponent; inventory?: InventoryComponent }>,
    delta: number
  ): void {
    // Check for item pickups
    for (const entity of entities) {
      if (entity.position && entity.inventory) {
        // Check if entity can pick up items nearby
        console.log('Checking inventory for entity');
      }
    }
  }

  public addItem(entity: { inventory?: InventoryComponent }, itemId: string): boolean {
    if (!entity.inventory) return false;
    if (entity.inventory.items.length >= entity.inventory.maxSize) return false;

    entity.inventory.items.push(itemId);
    return true;
  }
}

export default InventorySystem;
