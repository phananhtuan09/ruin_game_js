import { Entity } from '@/game/ecs/entities/archetypes';
import { MovementSystem } from '@/game/ecs/systems/MovementSystem';
import { RenderSystem } from '@/game/ecs/systems/RenderSystem';
import { CollisionSystem } from '@/game/ecs/systems/CollisionSystem';
import { LightingSystem } from '@/game/ecs/systems/LightingSystem';
import { AiSystem } from '@/game/ecs/systems/AiSystem';
import { InventorySystem } from '@/game/ecs/systems/InventorySystem';

export class World {
  private entities: Map<string, Entity> = new Map();
  private movementSystem: MovementSystem;
  private renderSystem: RenderSystem;
  private collisionSystem: CollisionSystem;
  private lightingSystem: LightingSystem;
  private aiSystem: AiSystem;
  private inventorySystem: InventorySystem;

  constructor() {
    this.movementSystem = new MovementSystem();
    this.renderSystem = new RenderSystem();
    this.collisionSystem = new CollisionSystem();
    this.lightingSystem = new LightingSystem();
    this.aiSystem = new AiSystem();
    this.inventorySystem = new InventorySystem();
    console.log('✅ ECS World initialized');
  }

  public addEntity(entity: Entity): void {
    this.entities.set(entity.id, entity);
  }

  public removeEntity(entityId: string): void {
    this.entities.delete(entityId);
  }

  public getEntity(entityId: string): Entity | undefined {
    return this.entities.get(entityId);
  }

  public getAllEntities(): Entity[] {
    return Array.from(this.entities.values());
  }

  public update(delta: number, container: any): void {
    const entities = this.getAllEntities();

    this.movementSystem.update(entities, delta);
    this.collisionSystem.update(entities, delta);
    this.aiSystem.update(entities, delta);
    this.inventorySystem.update(entities, delta);
    this.lightingSystem.update(entities, delta);
    this.renderSystem.update(entities, container);
  }
}

export default World;
