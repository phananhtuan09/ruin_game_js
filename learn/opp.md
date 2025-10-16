# Object-Oriented Programming (OOP) Concepts

## Table of Contents
- [OOP Fundamentals](#oop-fundamentals)
- [Single Instance vs Multiple Instance](#single-instance-vs-multiple-instance)
- [Singleton Pattern Options](#singleton-pattern-options)
- [Dependency Injection](#dependency-injection)
- [Best Practices](#best-practices)

## OOP Fundamentals

### 1. Class & Object
- **Class**: Template/blueprint for creating objects
- **Object**: Instance created from a class
- **Example**: `Application` class → `app` object

### 2. Encapsulation
- **Private Properties**: Data protection using `private` keyword
- **Controlled Access**: Only class methods can modify private data
- **Benefits**: Data integrity, easier maintenance

```typescript
class Application {
    private pixiApp: PIXI.Application;        // Protected data
    private sceneManager: SceneManager;      // Controlled access
}
```

### 3. Abstraction
- **Hide Complexity**: Complex implementation details are hidden
- **Simple Interface**: User only sees necessary methods
- **Example**: `app.start()` instead of complex initialization

### 4. Constructor Pattern
- **Initialization**: Setup object when created
- **Method Separation**: Break complex setup into smaller methods
- **Benefits**: Readability, maintainability, testability

```typescript
constructor() {
    this.initializePixi();        // Setup rendering
    this.initializeManagers();     // Setup systems
}
```

## Single Instance vs Multiple Instance

### Single Instance (Singleton)
**When to use:**
- Game engines (only one needed)
- Resource management (canvas, audio context)
- Global state management
- Performance optimization

**Benefits:**
- Memory efficiency
- State consistency
- Resource control
- Simplified architecture

### Multiple Instance
**When to use:**
- Testing (each test needs separate instance)
- Multiplayer games (each player has own game)
- Editor applications (multiple previews)
- Modular systems

**Benefits:**
- Isolation
- Flexibility
- Independent testing
- Scalability

## Singleton Pattern Options

### Option 1: Classic Singleton Pattern

```typescript
class Application {
    private static instance: Application;
    
    private constructor() {  // Private constructor
        this.initializePixi();
        this.initializeManagers();
    }
    
    public static getInstance(): Application {
        if (!Application.instance) {
            Application.instance = new Application();
        }
        return Application.instance;
    }
}

// Usage:
const app = Application.getInstance();
```

**Characteristics:**
- ✅ Strict control (private constructor)
- ✅ Explicit singleton behavior
- ❌ Verbose usage (`getInstance()`)
- ❌ Unfamiliar pattern

### Option 2: Factory Pattern

```typescript
class Application {
    constructor() {  // Public constructor
        this.initializePixi();
        this.initializeManagers();
    }
}

class ApplicationFactory {
    private static app: Application;
    
    static create(): Application {
        if (!ApplicationFactory.app) {
            ApplicationFactory.app = new Application();
        }
        return ApplicationFactory.app;
    }
}

// Usage:
const app = ApplicationFactory.create();
```

**Characteristics:**
- ✅ Flexible (Application can be instantiated normally)
- ✅ Separation of concerns
- ❌ Complex (requires 2 classes)
- ❌ Verbose usage (`Factory.create()`)

### Option 3: Simple Singleton (Constructor-based)

```typescript
class Application {
    private static instance: Application;
    
    constructor() {  // Public constructor
        if (Application.instance) {
            return Application.instance;  // Return existing instance
        }
        
        this.initializePixi();
        this.initializeManagers();
        Application.instance = this;
    }
}

// Usage:
const app = new Application();
const app2 = new Application(); // Same instance
```

**Characteristics:**
- ✅ Familiar usage (`new Application()`)
- ✅ Simple implementation
- ✅ Intuitive for developers
- ⚠️ Can be confusing (looks like multiple instances)

## Comparison Table

| Aspect | Option 1 (Classic) | Option 2 (Factory) | Option 3 (Simple) |
|--------|-------------------|-------------------|------------------|
| **Usage** | `getInstance()` | `Factory.create()` | `new Application()` |
| **Familiarity** | ❌ Unfamiliar | ❌ Unfamiliar | ✅ Familiar |
| **Simplicity** | ❌ Complex | ❌ Most Complex | ✅ Simple |
| **Flexibility** | ❌ Rigid | ✅ Flexible | ❌ Rigid |
| **Safety** | ✅ Very Safe | ✅ Safe | ⚠️ Tricky |
| **Lines of Code** | 8 lines | 12 lines | 6 lines |

## Dependency Injection

### What is Dependency Injection?
- **Definition**: A design pattern where dependencies are provided to a class rather than the class creating them
- **Purpose**: Reduces coupling between classes and makes code more testable and flexible
- **Benefits**: Loose coupling, testability, flexibility, maintainability

### DI Container Pattern

```typescript
export class DIContainer {
    private services = new Map<string, any>();
    private factories = new Map<string, Function>();

    register<T>(name: string, factory: () => T): void {
        this.factories.set(name, factory);
    }

    get<T>(name: string): T {
        // Check if already cached
        if (this.services.has(name)) {
            return this.services.get(name);
        }

        // Create new instance
        const factory = this.factories.get(name);
        if (!factory) {
            throw new Error(`Service ${name} not found`);
        }

        const instance = factory();
        this.services.set(name, instance); // Cache instance
        return instance;
    }
}
```

### Usage Example

```typescript
// Application.ts
export class Application {
    private container: DIContainer;
    private eventEmitter: EventEmitter;
    private sceneManager: SceneManager;

    private initializeManager(): void {
        this.container = new DIContainer();

        // Register dependencies
        this.container.register('eventEmitter', () => new EventEmitter());
        this.container.register(
            'sceneManager',
            () => new SceneManager(this.container.get('eventEmitter'))
        );

        // Resolve dependencies
        this.eventEmitter = this.container.get('eventEmitter');
        this.sceneManager = this.container.get('sceneManager');
    }
}
```

### DI vs Other Patterns

| Pattern | Coupling | Testability | Complexity | Use Case |
|---------|----------|--------------|------------|----------|
| **Direct Instantiation** | ❌ Tight | ❌ Hard | ✅ Simple | Quick prototypes |
| **Factory Pattern** | ⚠️ Medium | ⚠️ Medium | ⚠️ Medium | Single service |
| **Dependency Injection** | ✅ Loose | ✅ Easy | ❌ Complex | Large applications |

### Benefits of DI

1. **Loose Coupling**: Classes don't create their own dependencies
2. **Testability**: Easy to mock dependencies for testing
3. **Flexibility**: Can swap implementations easily
4. **Maintainability**: Changes in one class don't affect others
5. **Scalability**: Easy to add new services

### When to Use DI

- **Large Applications**: Complex dependency graphs
- **Testing Heavy**: Need to mock dependencies
- **Team Development**: Multiple developers working on different parts
- **Enterprise**: Production applications with strict requirements

### Common Pitfalls

1. **Over-engineering**: Don't use DI for simple cases
2. **Circular Dependencies**: A depends on B, B depends on A
3. **Service Locator Anti-pattern**: Using container as global state
4. **Performance**: Creating container overhead for simple cases

### Best Practices

1. **Register Dependencies**: Register all dependencies in one place
2. **Cache Instances**: Don't create new instances every time
3. **Error Handling**: Provide meaningful error messages
4. **Type Safety**: Use TypeScript generics for type safety
5. **Documentation**: Document dependency relationships

### Implementation Guidelines

```typescript
// ✅ Good: Clear dependency registration
container.register('eventEmitter', () => new EventEmitter());
container.register('sceneManager', () => new SceneManager(container.get('eventEmitter')));

// ❌ Bad: Circular dependency
container.register('serviceA', () => new ServiceA(container.get('serviceB')));
container.register('serviceB', () => new ServiceB(container.get('serviceA')));
```

### DI in Game Development

**Why DI is useful for games:**
- **Modular Systems**: Audio, Input, Rendering can be independent
- **Testing**: Easy to test game logic without rendering
- **Configuration**: Different setups for development/production
- **Hot Reloading**: Can swap implementations during development

**Example Game Dependencies:**
```typescript
// Register game systems
container.register('audioManager', () => new AudioManager());
container.register('inputManager', () => new InputManager());
container.register('renderSystem', () => new RenderSystem(container.get('audioManager')));
container.register('gameWorld', () => new GameWorld(
    container.get('inputManager'),
    container.get('renderSystem')
));
```

### Key Takeaways

1. **DI reduces coupling** between classes
2. **Makes code more testable** and maintainable
3. **Use for complex applications** with many dependencies
4. **Don't over-engineer** simple cases
5. **Cache instances** for performance
6. **Document dependencies** clearly

## Best Practices

### 1. Choose the Right Pattern
- **Game Development**: Option 3 (Simple Singleton)
- **Enterprise Applications**: Option 1 (Classic Singleton)
- **Flexible Systems**: Option 2 (Factory Pattern)

### 2. Implementation Guidelines
- **Lazy Initialization**: Create instance only when needed
- **Cleanup Methods**: Provide proper destruction
- **Type Safety**: Use TypeScript interfaces
- **Documentation**: Document singleton behavior

### 3. Common Pitfalls
- **Memory Leaks**: Forgot to cleanup static references
- **Testing Issues**: Singleton makes unit testing difficult
- **Thread Safety**: Not applicable in JavaScript (single-threaded)
- **Confusion**: Option 3 can look like multiple instances

### 4. When NOT to Use Singleton
- **Stateless Services**: Use dependency injection instead
- **Frequent Creation**: If you need many instances
- **Testing**: Makes mocking difficult
- **Modular Architecture**: Can create tight coupling

## Recommended Approach for Ruin Game

**Use Option 3 (Simple Singleton)** because:

1. **Game Development**: Simple and intuitive
2. **Team Experience**: Familiar with `new` keyword
3. **Maintenance**: Easy to understand and debug
4. **Performance**: Minimal overhead
5. **JavaScript Nature**: Fits well with JavaScript patterns

### Implementation Example:
```typescript
export class Application {
    private static instance: Application;
    private pixiApp: PIXI.Application;
    private sceneManager: SceneManager;
    private eventEmitter: EventEmitter;
    
    constructor() {
        // Prevent multiple instances
        if (Application.instance) {
            return Application.instance;
        }
        
        this.initializePixi();
        this.initializeManagers();
        Application.instance = this;
    }
    
    private initializePixi(): void {
        // PixiJS setup
    }
    
    private initializeManagers(): void {
        // Manager setup
    }
    
    public start(): void {
        // Start game loop
    }
    
    public destroy(): void {
        // Cleanup
        Application.instance = null;
    }
}
```

## Key Takeaways

1. **OOP Principles**: Encapsulation, Abstraction, Constructor patterns
2. **Singleton Benefits**: Resource control, state consistency, performance
3. **Pattern Selection**: Choose based on project needs and team experience
4. **Implementation**: Keep it simple and familiar for the team
5. **Best Practices**: Document behavior, provide cleanup, consider testing

---

*This document covers the OOP concepts discussed during the Ruin Game development setup. It serves as a reference for understanding object-oriented programming patterns and singleton implementation strategies.*
