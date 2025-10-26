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
│   │   ├── Application.ts            # Main application bootstrap
│   │   ├── AssetLoader.ts            # Asset loading and caching
│   │   ├── EventEmitter.ts           # Global event system
│   │   ├── SceneManager.ts           # Scene transitions and management
│   │   ├── Scene.ts                  # Base scene class
│   │   ├── TimeManager.ts            # Delta time, pause/resume, slow-motion
│   │   ├── DebugManager.ts           # Debug overlays, bounding boxes, logs
│   │   └── input/
│   │       ├── InputManager.ts       # Keyboard, mouse, gamepad input
│   │       └── actions.ts            # Input action mappings
│   │
│   ├── game/                         # Game-specific logic
│   │   ├── ecs/                      # Entity-Component-System
│   │   │   ├── components/
│   │   │   │   ├── PositionComponent.ts      # World position data
│   │   │   │   ├── VelocityComponent.ts      # Movement speed and direction
│   │   │   │   ├── SpriteComponent.ts        # Visual representation
│   │   │   │   ├── HealthComponent.ts        # HP, damage, healing
│   │   │   │   ├── FieldOfViewComponent.ts   # Vision range and fog of war
│   │   │   │   ├── InventoryComponent.ts     # Item storage and management
│   │   │   │   ├── CollisionComponent.ts     # Collision boundaries
│   │   │   │   └── AiComponent.ts            # AI behavior data
│   │   │   │
│   │   │   ├── systems/
│   │   │   │   ├── MovementSystem.ts         # Process movement and physics
│   │   │   │   ├── RenderSystem.ts           # Draw entities to screen
│   │   │   │   ├── CollisionSystem.ts        # Handle collisions
│   │   │   │   ├── LightingSystem.ts         # Dynamic lighting and shadows
│   │   │   │   ├── AiSystem.ts               # Enemy AI processing
│   │   │   │   └── InventorySystem.ts        # Item pickup and usage
│   │   │   │
│   │   │   ├── entities/
│   │   │   │   └── archetypes.ts             # Entity templates and factories
│   │   │   │
│   │   │   └── World.ts                      # ECS world coordinator
│   │   │
│   │   ├── map/                              # Map generation and management
│   │   │   ├── MapGenerator.ts               # Procedural dungeon generation
│   │   │   ├── MapManager.ts                 # Current map state and grid
│   │   │   └── TileManager.ts                # Tile rendering and collision
│   │   │
│   │   ├── scenes/
│   │   │   ├── MainMenuScene.ts              # Main menu and navigation
│   │   │   ├── DungeonScene.ts               # Core gameplay scene
│   │   │   ├── GameOverScene.ts              # Death and restart screen
│   │   │   ├── VictoryScene.ts               # Level completion screen
│   │   │   └── PauseScene.ts                 # Game pause overlay
│   │   │
│   │   └── ui/
│   │       ├── HUD.ts                        # Health bar, score display
│   │       ├── Minimap.ts                    # Small overview map
│   │       ├── InventoryPanel.ts             # Item management UI
│   │       ├── DialogueBox.ts                # NPC conversations
│   │       └── MainMenu.ts                   # Menu interface components
│   │
│   ├── modules/                              # Independent feature modules
│   │   ├── audio/
│   │   │   ├── AudioManager.ts               # Sound effect and music control
│   │   │   └── SpatialAudio.ts               # 3D positioned audio
│   │   ├── physics/
│   │   │   ├── PhysicsManager.ts             # Physics simulation wrapper
│   │   │   └── CollisionDetection.ts         # Collision algorithms
│   │   ├── quest/
│   │   │   ├── QuestManager.ts               # Quest tracking and completion
│   │   │   └── Objective.ts                  # Individual quest objectives
│   │   ├── save/
│   │   │   ├── SaveManager.ts                # Game state persistence
│   │   │   └── PlayerProgress.ts             # Progress tracking
│   │   └── effects/
│   │       ├── ParticleSystem.ts             # Visual effects
│   │       └── ScreenEffects.ts              # Screen shake, fade, etc.
│   │
│   ├── shared/                               # Shared utilities and constants
│   │   ├── constants.ts                      # Game constants and enums
│   │   ├── math.ts                           # Vector math, interpolation
│   │   ├── utils.ts                          # General utility functions
│   │   └── Config.ts                         # Global configuration
│   │
│   ├── types/                                # TypeScript type definitions
│   │   ├── global.d.ts                       # Global type declarations
│   │   ├── game.d.ts                         # Game-specific types
│   │   ├── ecs.d.ts                          # ECS system types
│   │   ├── assets.d.ts                       # Asset loading types
│   │   └── events.d.ts                       # Event system types
│   │
│   └── main.ts                               # Application entry point
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
├── learn/                                    # Learning resources and knowledge base
│   └── opp.md                                # Object-Oriented Programming concepts
│
├── config/                                   # Build and environment configs
│   ├── vite.config.ts                        # Vite build configuration
│   ├── vite.config.prod.ts                   # Production build settings
│   └── eslint.config.js                      # ESLint configuration
│
├── AGENTS.md                                 # AI agent guidelines
├── WRAP.md                                   # AI context loading guide
├── docs/ai/project/
│   ├── PROJECT_STRUCTURE.md                      # This file
│   └── CODE_CONVENTIONS.md                       # Coding standards
├── README.md                                 # Project overview
├── CHANGELOG.md                              # Version history
├── package.json                              # Dependencies and scripts
├── tsconfig.json                             # TypeScript configuration
├── vite.config.ts                            # Vite build configuration
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