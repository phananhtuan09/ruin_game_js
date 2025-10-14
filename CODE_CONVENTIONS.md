# Code Conventions - Ruin Game

## Overview

This document defines coding standards and best practices specifically designed for our modular ECS (Entity-Component-System) architecture. These conventions support the project's core principles of modularity, data-driven design, and separation of concerns.

## General JavaScript Conventions

### Code Formatting
- **Indentation**: 2 spaces (enforced by Prettier)
- **Line Length**: 80 characters maximum
- **Quotes**: Single quotes for strings, double quotes for HTML attributes
- **Semicolons**: Always required
- **Trailing Commas**: ES5 style (objects and arrays)

### Variable Naming
```javascript
// Constants: SCREAMING_SNAKE_CASE
const MAX_HEALTH = 100;
const GAME_STATES = {
  PLAYING: 'playing',
  PAUSED: 'paused'
};

// Variables and functions: camelCase
const playerHealth = 85;
const currentLevel = 1;

function calculateDamage(baseDamage, modifier) {
  return baseDamage * modifier;
}

// Classes: PascalCase
class MovementSystem {
  constructor() {}
}

// Private properties: underscore prefix
class Player {
  constructor() {
    this._internalState = {};
  }
}
```

## ECS Architecture Conventions

### Components (Data Only)
Components should contain **only data**, no methods except constructor and basic getters/setters.

```javascript
// ✅ Good: Pure data component
class PositionComponent {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.lastX = x;
    this.lastY = y;
  }

  // Simple getter/setter allowed
  get position() {
    return { x: this.x, y: this.y };
  }
}

// ❌ Bad: Logic in component
class PositionComponent {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  // No! Logic belongs in systems
  updatePosition(deltaTime) {
    this.x += this.velocity.x * deltaTime;
  }
}
```

### Systems (Logic Only)
Systems process components and should be stateless regarding game data.

```javascript
// ✅ Good: Stateless system processing components
class MovementSystem {
  constructor(world) {
    this.world = world;
    this.entities = [];
  }

  update(deltaTime) {
    // Get entities with required components
    this.entities = this.world.getEntitiesWith([
      'PositionComponent',
      'VelocityComponent'
    ]);

    for (const entity of this.entities) {
      const position = entity.getComponent('PositionComponent');
      const velocity = entity.getComponent('VelocityComponent');
      
      // Store previous position for collision detection
      position.lastX = position.x;
      position.lastY = position.y;
      
      // Update position based on velocity
      position.x += velocity.x * deltaTime;
      position.y += velocity.y * deltaTime;
    }
  }
}

// ❌ Bad: System storing game state
class MovementSystem {
  constructor(world) {
    this.world = world;
    this.playerPosition = { x: 0, y: 0 }; // No! Use components
  }
}
```

### Entity Creation Patterns
Use factory functions for entity creation with JSON data definitions.

```javascript
// ✅ Good: Data-driven entity creation
// In src/game/ecs/entities/archetypes.js
import enemyDefinitions from '../../../public/assets/data/definitions/enemies/slime.json';

export function createSlime(world, x, y) {
  const definition = enemyDefinitions.slime;
  
  const entity = world.createEntity();
  entity.addComponent(new PositionComponent(x, y));
  entity.addComponent(new SpriteComponent(definition.texture));
  entity.addComponent(new HealthComponent(definition.maxHealth));
  entity.addComponent(new VelocityComponent(0, 0));
  entity.addComponent(new AiComponent(definition.aiType));
  
  return entity;
}

// ❌ Bad: Hardcoded values
export function createSlime(world, x, y) {
  const entity = world.createEntity();
  entity.addComponent(new PositionComponent(x, y));
  entity.addComponent(new HealthComponent(25)); // Hardcoded!
  return entity;
}
```

## Module Organization Conventions

### Layer Dependencies
Strict dependency rules between architectural layers:

```javascript
// ✅ Good: Proper layer imports
// In src/game/ (Game Layer)
import { EventEmitter } from '../core/EventEmitter.js';     // Core → Game ✓
import { Vector2 } from '../shared/math.js';               // Shared → Game ✓

// In src/core/ (Core Layer)  
import { lerp } from '../shared/math.js';                   // Shared → Core ✓

// ❌ Bad: Violating layer boundaries
// In src/core/ (Core Layer)
import DungeonScene from '../game/scenes/DungeonScene.js';  // Game → Core ✗

// In src/shared/ (Shared Layer)
import AudioManager from '../modules/audio/AudioManager.js'; // Module → Shared ✗
```

### Module Export Patterns
```javascript
// ✅ Good: Clear export patterns
// For classes: default export
export default class MovementSystem {
  // class implementation
}

// For utilities: named exports
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

// For constants: named exports
export const GAME_STATES = {
  MENU: 'menu',
  PLAYING: 'playing',
  PAUSED: 'paused'
};

// ✅ Good: Barrel exports in index.js
// src/game/ecs/components/index.js
export { default as PositionComponent } from './PositionComponent.js';
export { default as VelocityComponent } from './VelocityComponent.js';
export { default as SpriteComponent } from './SpriteComponent.js';
```

## Event-Driven Communication

### Event Naming
Use descriptive, hierarchical event names:

```javascript
// ✅ Good: Clear, hierarchical event names
const EVENTS = {
  PLAYER: {
    HEALTH_CHANGED: 'player:health:changed',
    LEVEL_UP: 'player:level:up',
    ITEM_PICKED_UP: 'player:item:picked_up'
  },
  ENEMY: {
    SPAWNED: 'enemy:spawned',
    DIED: 'enemy:died',
    ATTACKED: 'enemy:attacked'
  },
  GAME: {
    STATE_CHANGED: 'game:state:changed',
    LEVEL_COMPLETED: 'game:level:completed'
  }
};

// Usage
this.eventEmitter.emit(EVENTS.PLAYER.HEALTH_CHANGED, { 
  newHealth: 75, 
  maxHealth: 100 
});
```

### Event Payload Standards
```javascript
// ✅ Good: Consistent event payload structure
{
  type: 'player:health:changed',
  timestamp: Date.now(),
  data: {
    entityId: 'player_001',
    previousHealth: 100,
    currentHealth: 75,
    maxHealth: 100
  },
  source: 'HealthSystem'
}

// ❌ Bad: Inconsistent or unclear payload
{
  hp: 75,  // Unclear property name
  // Missing context and metadata
}
```

## Data Definition Conventions

### JSON Data Structure
```javascript
// ✅ Good: Structured JSON definitions
// public/assets/data/definitions/enemies/slime.json
{
  "id": "slime",
  "name": "Cave Slime",
  "category": "enemy",
  "components": {
    "health": {
      "maxHealth": 25,
      "currentHealth": 25,
      "resistances": ["poison"]
    },
    "movement": {
      "speed": 30,
      "acceleration": 100
    },
    "ai": {
      "type": "aggressive",
      "detectionRange": 64,
      "attackRange": 16
    },
    "sprite": {
      "texture": "slime_idle.png",
      "animations": {
        "idle": "slime_idle.png",
        "move": "slime_move.png",
        "attack": "slime_attack.png"
      }
    }
  },
  "metadata": {
    "version": "1.0",
    "author": "GameDesigner",
    "description": "Basic cave-dwelling enemy"
  }
}
```

## Performance Conventions

### Object Pooling Pattern
```javascript
// ✅ Good: Object pooling for frequently created/destroyed objects
class ProjectilePool {
  constructor(initialSize = 50) {
    this.pool = [];
    this.active = [];
    
    // Pre-allocate objects
    for (let i = 0; i < initialSize; i++) {
      this.pool.push(this.createProjectile());
    }
  }
  
  acquire(x, y, velocity) {
    let projectile;
    
    if (this.pool.length > 0) {
      projectile = this.pool.pop();
      projectile.reset(x, y, velocity);
    } else {
      projectile = this.createProjectile(x, y, velocity);
    }
    
    this.active.push(projectile);
    return projectile;
  }
  
  release(projectile) {
    const index = this.active.indexOf(projectile);
    if (index > -1) {
      this.active.splice(index, 1);
      this.pool.push(projectile);
    }
  }
}
```

### Game Loop Optimization
```javascript
// ✅ Good: Minimize allocations in game loop
class RenderSystem {
  constructor() {
    this.entities = []; // Reuse array
    this.tempVector = new Vector2(); // Reuse objects
  }
  
  update(deltaTime) {
    // Clear and reuse array instead of creating new one
    this.entities.length = 0;
    this.world.getEntitiesWith(['PositionComponent', 'SpriteComponent'], this.entities);
    
    for (let i = 0; i < this.entities.length; i++) {
      const entity = this.entities[i];
      this.renderEntity(entity);
    }
  }
}

// ❌ Bad: Creating new objects in game loop
class RenderSystem {
  update(deltaTime) {
    const entities = this.world.getEntitiesWith(['PositionComponent', 'SpriteComponent']); // New array each frame!
    
    for (const entity of entities) {
      const position = new Vector2(entity.x, entity.y); // New object each frame!
      this.renderEntity(entity, position);
    }
  }
}
```

## Error Handling Conventions

### Defensive Programming
```javascript
// ✅ Good: Validate inputs and provide fallbacks
class HealthSystem {
  takeDamage(entity, damage) {
    // Validate inputs
    if (!entity || !entity.hasComponent('HealthComponent')) {
      console.warn('HealthSystem: Invalid entity or missing HealthComponent');
      return false;
    }
    
    if (typeof damage !== 'number' || damage < 0) {
      console.warn('HealthSystem: Invalid damage value:', damage);
      return false;
    }
    
    const health = entity.getComponent('HealthComponent');
    const previousHealth = health.currentHealth;
    
    health.currentHealth = Math.max(0, health.currentHealth - damage);
    
    // Emit event for UI updates
    this.eventEmitter.emit('entity:health:changed', {
      entityId: entity.id,
      previousHealth,
      currentHealth: health.currentHealth,
      damage
    });
    
    return true;
  }
}
```

## Testing Conventions

### Unit Test Structure
```javascript
// ✅ Good: Clear test structure with setup/teardown
describe('MovementSystem', () => {
  let world;
  let movementSystem;
  let entity;
  
  beforeEach(() => {
    world = new World();
    movementSystem = new MovementSystem(world);
    entity = world.createEntity();
    entity.addComponent(new PositionComponent(0, 0));
    entity.addComponent(new VelocityComponent(10, 5));
  });
  
  afterEach(() => {
    world.clear();
  });
  
  describe('update', () => {
    it('should move entity based on velocity and delta time', () => {
      // Arrange
      const deltaTime = 1;
      const expectedX = 10; // 0 + (10 * 1)
      const expectedY = 5;  // 0 + (5 * 1)
      
      // Act
      movementSystem.update(deltaTime);
      
      // Assert
      const position = entity.getComponent('PositionComponent');
      expect(position.x).toBe(expectedX);
      expect(position.y).toBe(expectedY);
    });
    
    it('should handle entities without velocity component gracefully', () => {
      // Arrange
      const entityWithoutVelocity = world.createEntity();
      entityWithoutVelocity.addComponent(new PositionComponent(5, 5));
      
      // Act & Assert (should not throw)
      expect(() => {
        movementSystem.update(1);
      }).not.toThrow();
    });
  });
});
```

## Documentation Conventions

### JSDoc Standards
```javascript
/**
 * Calculates damage based on base damage and various modifiers
 * @param {number} baseDamage - The base damage amount
 * @param {Object} modifiers - Damage modifiers
 * @param {number} modifiers.criticalMultiplier - Critical hit multiplier
 * @param {number[]} modifiers.resistances - Array of resistance percentages
 * @param {number} modifiers.levelBonus - Level-based damage bonus
 * @returns {number} The final calculated damage
 * @example
 * const damage = calculateDamage(50, {
 *   criticalMultiplier: 2.0,
 *   resistances: [0.1, 0.2],
 *   levelBonus: 10
 * });
 */
function calculateDamage(baseDamage, modifiers = {}) {
  // Implementation
}

/**
 * System responsible for processing entity movement
 * Requires entities to have PositionComponent and VelocityComponent
 * @extends System
 */
class MovementSystem extends System {
  /**
   * Updates all entities with movement components
   * @param {number} deltaTime - Time elapsed since last frame in seconds
   * @fires entity:moved When an entity changes position
   */
  update(deltaTime) {
    // Implementation
  }
}
```

## Configuration Management

### Environment-Specific Settings
```javascript
// ✅ Good: Centralized configuration
// src/shared/Config.js
const CONFIG = {
  DEVELOPMENT: {
    DEBUG_MODE: true,
    LOG_LEVEL: 'debug',
    SHOW_FPS: true,
    SHOW_BOUNDING_BOXES: true
  },
  
  PRODUCTION: {
    DEBUG_MODE: false,
    LOG_LEVEL: 'error',
    SHOW_FPS: false,
    SHOW_BOUNDING_BOXES: false
  },
  
  GAME: {
    TILE_SIZE: 32,
    VIEWPORT_WIDTH: 800,
    VIEWPORT_HEIGHT: 600,
    MAX_ENTITIES: 1000
  }
};

export default CONFIG[process.env.NODE_ENV?.toUpperCase()] || CONFIG.DEVELOPMENT;
```

These conventions ensure:
- **Consistency** across the codebase
- **Maintainability** through clear separation of concerns  
- **Performance** through optimized patterns
- **Testability** through predictable interfaces
- **Scalability** through modular architecture

Follow these conventions to maintain code quality and team collaboration efficiency.