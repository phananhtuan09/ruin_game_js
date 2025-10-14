# Project Structure - Ruin Game

## Architecture Philosophy

### Design Principles
- **Modularity**: Each component is an independent "black box" that communicates through well-defined interfaces
- **Data-Driven Design**: Game behavior is defined through data (JSON files) rather than hardcoded logic
- **Separation of Logic and Data**: Following ECS (Entity-Component-System) pattern where data (Components) is completely separated from processing logic (Systems)
- **Layered Architecture**: Clear separation between core engine, game logic, and modules

## Complete Directory Structure

```
ruin_game/
├── public/
│   └── assets/
│       ├── audio/                    # Sound effects and music
│       ├── fonts/                    # Custom fonts for UI
│       ├── shaders/                  # GLSL shaders for lighting effects
│       ├── textures/
│       │   ├── entities/             # Player, enemies, NPCs sprites
│       │   ├── items/                # Weapons, potions, collectibles
│       │   ├── ui/                   # UI elements, buttons, panels
│       │   └── tilesets/             # Dungeon tiles, walls, floors
│       └── data/
│           ├── definitions/
│           │   ├── enemies/          # Enemy stats, behaviors (JSON)
│           │   ├── items/            # Item properties, effects (JSON)
│           │   └── levels/           # Level configurations (JSON)
│           └── maps/                 # Map data from Tiled Editor
│
├── src/
│   ├── core/                         # Reusable "Mini Engine"
│   │   ├── Application.js            # Main application bootstrap
│   │   ├── AssetLoader.js            # Asset loading and caching
│   │   ├── EventEmitter.js           # Global event system
│   │   ├── SceneManager.js           # Scene transitions and management
│   │   ├── Scene.js                  # Base scene class
│   │   ├── TimeManager.js            # Delta time, pause/resume, slow-motion
│   │   ├── DebugManager.js           # Debug overlays, bounding boxes, logs
│   │   └── input/
│   │       ├── InputManager.js       # Keyboard, mouse, gamepad input
│   │       └── actions.js            # Input action mappings
│   │
│   ├── game/                         # Game-specific logic
│   │   ├── ecs/                      # Entity-Component-System
│   │   │   ├── components/
│   │   │   │   ├── PositionComponent.js      # World position data
│   │   │   │   ├── VelocityComponent.js      # Movement speed and direction
│   │   │   │   ├── SpriteComponent.js        # Visual representation
│   │   │   │   ├── HealthComponent.js        # HP, damage, healing
│   │   │   │   ├── FieldOfViewComponent.js   # Vision range and fog of war
│   │   │   │   ├── InventoryComponent.js     # Item storage and management
│   │   │   │   ├── CollisionComponent.js     # Collision boundaries
│   │   │   │   └── AiComponent.js            # AI behavior data
│   │   │   │
│   │   │   ├── systems/
│   │   │   │   ├── MovementSystem.js         # Process movement and physics
│   │   │   │   ├── RenderSystem.js           # Draw entities to screen
│   │   │   │   ├── CollisionSystem.js        # Handle collisions
│   │   │   │   ├── LightingSystem.js         # Dynamic lighting and shadows
│   │   │   │   ├── AiSystem.js               # Enemy AI processing
│   │   │   │   └── InventorySystem.js        # Item pickup and usage
│   │   │   │
│   │   │   ├── entities/
│   │   │   │   └── archetypes.js             # Entity templates and factories
│   │   │   │
│   │   │   └── World.js                      # ECS world coordinator
│   │   │
│   │   ├── map/                              # Map generation and management
│   │   │   ├── MapGenerator.js               # Procedural dungeon generation
│   │   │   ├── MapManager.js                 # Current map state and grid
│   │   │   └── TileManager.js                # Tile rendering and collision
│   │   │
│   │   ├── scenes/
│   │   │   ├── MainMenuScene.js              # Main menu and navigation
│   │   │   ├── DungeonScene.js               # Core gameplay scene
│   │   │   ├── GameOverScene.js              # Death and restart screen
│   │   │   ├── VictoryScene.js               # Level completion screen
│   │   │   └── PauseScene.js                 # Game pause overlay
│   │   │
│   │   └── ui/
│   │       ├── HUD.js                        # Health bar, score display
│   │       ├── Minimap.js                    # Small overview map
│   │       ├── InventoryPanel.js             # Item management UI
│   │       ├── DialogueBox.js                # NPC conversations
│   │       └── MainMenu.js                   # Menu interface components
│   │
│   ├── modules/                              # Independent feature modules
│   │   ├── audio/
│   │   │   ├── AudioManager.js               # Sound effect and music control
│   │   │   └── SpatialAudio.js               # 3D positioned audio
│   │   ├── physics/
│   │   │   ├── PhysicsManager.js             # Physics simulation wrapper
│   │   │   └── CollisionDetection.js         # Collision algorithms
│   │   ├── quest/
│   │   │   ├── QuestManager.js               # Quest tracking and completion
│   │   │   └── Objective.js                  # Individual quest objectives
│   │   ├── save/
│   │   │   ├── SaveManager.js                # Game state persistence
│   │   │   └── PlayerProgress.js             # Progress tracking
│   │   └── effects/
│   │       ├── ParticleSystem.js             # Visual effects
│   │       └── ScreenEffects.js              # Screen shake, fade, etc.
│   │
│   ├── shared/                               # Shared utilities and constants
│   │   ├── constants.js                      # Game constants and enums
│   │   ├── math.js                           # Vector math, interpolation
│   │   ├── utils.js                          # General utility functions
│   │   └── Config.js                         # Global configuration
│   │
│   └── main.js                               # Application entry point
│
├── tests/                                    # Testing suite
│   ├── core/
│   │   ├── EventEmitter.test.js              # Event system tests
│   │   └── SceneManager.test.js              # Scene management tests
│   ├── ecs/
│   │   ├── components/
│   │   │   └── PositionComponent.test.js     # Component tests
│   │   └── systems/
│   │       └── MovementSystem.test.js        # System logic tests
│   ├── utils/
│   │   ├── collision.test.js                 # Collision detection tests
│   │   └── math.test.js                      # Math utilities tests
│   └── test-setup.js                         # Test environment setup
│
├── docs/                                     # Project documentation
│   ├── API_REFERENCE.md                      # Internal API documentation
│   ├── GAME_DESIGN.md                        # Game mechanics and features
│   └── DEPLOYMENT.md                         # Build and deployment guide
│
├── config/                                   # Build and environment configs
│   ├── vite.config.js                        # Vite build configuration
│   ├── vite.config.prod.js                   # Production build settings
│   └── eslint.config.js                      # ESLint configuration
│
├── AGENTS.md                                 # AI agent guidelines
├── WRAP.md                                   # AI context loading guide
├── PROJECT_STRUCTURE.md                      # This file
├── CODE_CONVENTIONS.md                       # Coding standards
├── README.md                                 # Project overview
├── CHANGELOG.md                              # Version history
├── package.json                              # Dependencies and scripts
├── .eslintrc.js                              # ESLint rules
├── .prettierrc.js                            # Prettier formatting
├── .gitignore                                # Git ignore patterns
└── LICENSE                                   # Project license
```

## Layer Descriptions

### 1. Core Layer (`src/core/`)
- **Purpose**: Reusable engine components that could work for any 2D game
- **Dependencies**: Only on external libraries (PixiJS, etc.)
- **Principle**: Generic, no game-specific logic

### 2. Game Layer (`src/game/`)
- **Purpose**: Ruin-specific game logic and systems
- **Dependencies**: Core layer + game data
- **Principle**: Implements specific game mechanics using core components

### 3. Module Layer (`src/modules/`)
- **Purpose**: Independent feature systems that can be enabled/disabled
- **Dependencies**: Core layer, minimal game layer dependencies
- **Principle**: Plug-and-play architecture for features

### 4. Shared Layer (`src/shared/`)
- **Purpose**: Common utilities used across all layers
- **Dependencies**: None or minimal external dependencies
- **Principle**: Pure functions and constants

## File Naming Conventions

### Classes and Components
- **PascalCase** for classes: `MovementSystem.js`, `PositionComponent.js`
- **Suffix with type**: `Component.js`, `System.js`, `Manager.js`, `Scene.js`

### Utilities and Constants
- **camelCase** for utilities: `math.js`, `utils.js`
- **lowercase** for constants: `constants.js`, `actions.js`

### Data Files
- **kebab-case** for JSON data: `enemy-stats.json`, `level-config.json`
- **Grouped by type**: Place in appropriate `/definitions/` subfolder

## Import/Export Patterns

### ES6 Modules
- Use **named exports** for utilities and components
- Use **default exports** for classes and main modules
- **Barrel exports** in index.js files for clean imports

### Example Import Structure
```javascript
// Good: Clear module boundaries
import { Vector2, lerp } from '../shared/math.js';
import { GAME_STATES } from '../shared/constants.js';
import MovementSystem from './systems/MovementSystem.js';

// Avoid: Cross-layer violations
// import DungeonScene from '../game/scenes/DungeonScene.js'; // From core layer
```

## Data Flow Architecture

### Event-Driven Communication
- **Components**: Hold only data, no logic
- **Systems**: Process components, emit events for state changes  
- **Managers**: Listen to events, coordinate between systems
- **UI**: Reacts to game state events

### Data Definition Pattern
- **JSON files** define game content (enemies, items, levels)
- **Factory classes** create entities from JSON definitions
- **No hardcoded game data** in JavaScript files

This structure supports:
- **Easy testing** (each layer can be tested independently)
- **Hot reloading** (data changes don't require code restart)
- **Team collaboration** (clear boundaries between features)
- **Performance optimization** (systems can be profiled and optimized individually)