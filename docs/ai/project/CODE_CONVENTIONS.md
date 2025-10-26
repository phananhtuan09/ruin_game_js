# Code Conventions - Ruin Game

## Naming Conventions
- **Constants**: SCREAMING_SNAKE_CASE (MAX_HEALTH, GAME_STATES)
- **Variables & Functions**: camelCase (playerHealth, calculateDamage)
- **Classes**: PascalCase (MovementSystem, PositionComponent)
- **Private Properties**: underscore prefix (_internalState)
- **Files**: PascalCase for classes (MovementSystem.ts), camelCase for utilities (math.ts)

## ECS Architecture Rules

### Components
- **Data Only**: Components contain only data, no logic
- **Simple Operations**: Only constructor and basic getters/setters allowed
- **No Business Logic**: Processing logic belongs in Systems

### Systems
- **Stateless**: No game state storage in systems
- **Component Processing**: Query entities with required components
- **Pure Logic**: Transform component data based on game rules

### Entity Creation
- **Factory Pattern**: Use factory functions for entity creation
- **Data-Driven**: Load entity definitions from JSON files
- **No Hardcoding**: Avoid hardcoded values in entity creation

## Module Organization

### Layer Dependencies
- **Core Layer**: Only depends on external libraries
- **Game Layer**: Can import from Core and Shared layers
- **Module Layer**: Minimal dependencies, mostly Core layer
- **Shared Layer**: No dependencies on other layers
- **Strict Rule**: Never import "upward" in the hierarchy

### Export Patterns
- **Classes**: Use default exports (export default class MovementSystem)
- **Utilities**: Use named exports (export function clamp, lerp)
- **Constants**: Use named exports (export const GAME_STATES)
- **Barrel Exports**: Use index.ts files for clean imports

## Event System

### Event Naming
- **Hierarchical**: Use colon-separated naming (player:health:changed)
- **Descriptive**: Clear action description (spawned, died, picked_up)
- **Grouped**: Organize by entity type (PLAYER, ENEMY, GAME events)

### Event Payloads
- **Consistent Structure**: Include type, timestamp, data, source
- **Complete Data**: Provide all relevant context information
- **Type Safety**: Use TypeScript interfaces for event data

## Data Definitions

### JSON Structure
- **Organized**: Group by component type (health, movement, ai, sprite)
- **Metadata**: Include version, author, description for tracking
- **Complete**: Define all component properties needed for entity creation
- **Validation**: Ensure JSON structure matches component interfaces

## Performance Best Practices

### Object Management
- **Object Pooling**: Reuse objects for frequently created/destroyed items (projectiles, particles)
- **Array Reuse**: Clear and reuse arrays instead of creating new ones in game loops
- **Minimal Allocations**: Avoid creating objects during frame updates
- **Batch Operations**: Group similar operations to reduce overhead

## Error Handling

### Defensive Programming
- **Input Validation**: Always validate parameters before processing
- **Null Checks**: Verify objects exist before accessing properties
- **Type Checking**: Ensure correct data types, especially for damage/health values
- **Graceful Degradation**: Provide fallback behavior when operations fail
- **Informative Logging**: Include context in error messages for debugging

## Testing Guidelines

### Test Structure
- **Setup/Teardown**: Use beforeEach/afterEach for consistent test state
- **Arrange-Act-Assert**: Follow AAA pattern for clear test organization  
- **Edge Cases**: Test error conditions and boundary values
- **Isolation**: Each test should be independent and not affect others

## Documentation

### JSDoc Standards
- **Function Purpose**: Describe what the function does and why
- **Parameters**: Document type, purpose, and constraints for each parameter
- **Return Values**: Specify return type and meaning
- **Examples**: Provide usage examples for complex functions
- **Events**: Document emitted events with @fires tag

## Configuration Management

### Environment Settings
- **Centralized**: Single config file for all environment settings
- **Environment-Specific**: Different settings for development/production
- **Type Safety**: Use TypeScript interfaces for config validation
- **Constants**: Define game constants (TILE_SIZE, MAX_ENTITIES) in config

## TypeScript Guidelines

### Type Safety
- **Strong Typing**: Define interfaces for all data structures (Components, Events, Config)
- **Generic Constraints**: Use proper type constraints for ECS systems and entities
- **No Any**: Avoid 'any' type, use 'unknown' or specific types instead
- **Type Guards**: Implement type checking functions for runtime validation

### Path Aliases
- **@ Symbol**: Use @ prefix for src directory (@/shared/math, @/game/systems)
- **Layer-Specific**: Define aliases for each architectural layer (@/core, @/game, @/modules)
- **Consistent Usage**: Always use aliases instead of relative paths

### Enums and Constants
- **Const Assertions**: Use 'as const' for immutable objects
- **String Enums**: Use for debugging and serialization
- **Numeric Enums**: Use for performance-critical operations
- **Type Derivation**: Extract types from const objects when needed

### Error Handling
- **Result Types**: Use Result<T, E> pattern for operations that can fail
- **Type-Safe Errors**: Define specific error types for different failure modes
- **Exhaustive Checking**: Use discriminated unions for comprehensive error handling

### Declaration Files
- **Global Types**: Define global constants and window extensions in global.d.ts
- **Asset Modules**: Declare module types for imported assets (*.png, *.json)
- **Library Extensions**: Extend external library types when needed

### Migration Strategy
- **Gradual**: Start with low-dependency files first
- **Interface First**: Create interfaces before implementing classes
- **Temporary Any**: Use any temporarily with TODO comments for later typing
- **Type Assertions**: Use carefully and only when necessary

---

## Benefits

These conventions ensure **consistency**, **maintainability**, **performance**, and **type safety** across the codebase while supporting the modular ECS architecture and enabling effective team collaboration.
