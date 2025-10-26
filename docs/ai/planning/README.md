---
phase: planning
title: Project Planning & Task Breakdown
description: Break down work into actionable tasks and estimate timeline
---

# Project Planning & Task Breakdown

## Milestones
**What are the major checkpoints?**

- [x] **Milestone 1: Core Engine Foundation** (Completed)
  - Application bootstrap, EventEmitter, SceneManager, DIContainer
  - PixiJS integration and basic rendering
- [ ] **Milestone 2: ECS Implementation** (In Progress)
  - Entity, Component, System architecture
  - Core components (Position, Velocity, Health, Sprite)
  - Basic systems (Movement, Render)
- [ ] **Milestone 3: Player & Controls** (Next)
  - Player entity creation
  - Input handling (WASD, mouse)
  - Basic movement and collision
- [ ] **Milestone 4: Dungeon Generation** 
  - Procedural room placement
  - Corridor generation
  - Enemy and item spawning
- [ ] **Milestone 5: Combat & Progression**
  - Damage system
  - Enemy AI basics
  - Death and respawn
- [ ] **Milestone 6: Inventory & Items**
  - Item pickups
  - Inventory management
  - Equipment system
- [ ] **Milestone 7: Polish & Effects**
  - UI/HUD
  - Audio integration
  - Visual effects and feedback

## Task Breakdown
**What specific work needs to be done?**

### Phase 1: Foundation ✅ (Completed)

- [x] Set up project structure with Vite and TypeScript
- [x] Implement EventEmitter for pub/sub communication
- [x] Create SceneManager for scene lifecycle
- [x] Build DIContainer for dependency injection
- [x] Bootstrap PixiJS Application
- [x] Create basic main.ts entry point
- [x] Configure build tools and path aliases

### Phase 2: ECS Foundation 🏗️ (Current Phase)

**Task 2.1: Core ECS Architecture**
- [ ] Create `src/game/ecs/` directory structure
- [ ] Implement Entity class with unique ID generation
- [ ] Create Component base class or interface
- [ ] Build World class to coordinate systems and entities
- [ ] Implement component storage (Map-based registry)
- [ ] Create entity factory pattern

**Task 2.2: Core Components**
- [ ] PositionComponent (x, y, rotation)
- [ ] VelocityComponent (vx, vy, speed)
- [ ] SpriteComponent (texture, layer, visible)
- [ ] HealthComponent (hp, maxHp, armor)
- [ ] CollisionComponent (bounds, shape)
- [ ] AIComponent (behavior, state) - placeholder

**Task 2.3: Core Systems**
- [ ] MovementSystem - applies velocity to position
- [ ] RenderSystem - draws sprites to screen
- [ ] CollisionSystem - AABB collision detection
- [ ] Implement system update loop in World
- [ ] Test component queries and processing

**Task 2.4: System Integration**
- [ ] Connect systems to update loop
- [ ] Set up proper system dependencies
- [ ] Test entity creation and removal
- [ ] Verify component data flow

### Phase 3: Player & Controls 🎮

**Task 3.1: Player Entity**
- [ ] Create player archetype JSON
- [ ] Build player factory function
- [ ] Assign player components (position, health, sprite, input)
- [ ] Place player in starting position

**Task 3.2: Input Handling**
- [ ] Create InputManager in `src/core/input/`
- [ ] Implement keyboard input mapping
- [ ] Add mouse support for future interaction
- [ ] Create input action system (WASD → directions)
- [ ] Emit move events to ECS world

**Task 3.3: Movement System Enhancement**
- [ ] Connect input events to player velocity
- [ ] Add collision checking for walls
- [ ] Implement smooth movement interpolation
- [ ] Add movement animation states

**Task 3.4: Camera System**
- [ ] Implement camera following player
- [ ] Add camera bounds to screen size
- [ ] Smooth camera interpolation
- [ ] Test with different screen sizes

### Phase 4: Dungeon Generation 🏰

**Task 4.1: Map Infrastructure**
- [ ] Create TileManager for grid management
- [ ] Implement tile types (floor, wall, door)
- [ ] Build grid-based coordinate system
- [ ] Create tile rendering system

**Task 4.2: Room Generation**
- [ ] Implement Binary Space Partitioning
- [ ] Create room placement algorithm
- [ ] Add room size and count parameters
- [ ] Validate room placement (no overlaps)

**Task 4.3: Corridor Generation**
- [ ] Connect adjacent rooms with corridors
- [ ] Use A* or L-shaped pathfinding
- [ ] Ensure all rooms are accessible
- [ ] Handle edge cases (unreachable rooms)

**Task 4.4: Enemy & Item Spawning**
- [ ] Implement Poisson disk sampling
- [ ] Add enemy spawn points per room
- [ ] Add item spawn points (treasure, health)
- [ ] Validate spawn locations are valid
- [ ] Create spawn rules and density controls

**Task 4.5: Map Integration**
- [ ] Integrate MapGenerator with DungeonScene
- [ ] Load generated map into World
- [ ] Add tiles to collision system
- [ ] Test dungeon generation performance

### Phase 5: Combat & Progression ⚔️

**Task 5.1: Combat System**
- [ ] Create CombatSystem
- [ ] Implement damage calculation (dice rolls)
- [ ] Add armor mitigation
- [ ] Handle health updates and death
- [ ] Emit combat events (hit, kill, etc.)

**Task 5.2: Enemy AI**
- [ ] Create basic AI behaviors (patrol, chase, attack)
- [ ] Implement state machine for AI states
- [ ] Add field of view detection
- [ ] Create pathfinding for enemies
- [ ] Implement attack patterns

**Task 5.3: Progression**
- [ ] Add experience/level system
- [ ] Create stat growth on level up
- [ ] Implement difficulty scaling
- [ ] Add game over and restart logic

### Phase 6: Inventory & Items 🎒

**Task 6.1: Inventory System**
- [ ] Implement InventoryComponent
- [ ] Add InventorySystem for item management
- [ ] Create item pickup on collision
- [ ] Add inventory UI panel
- [ ] Handle inventory capacity

**Task 6.2: Item System**
- [ ] Create item definitions (weapons, armor, consumables)
- [ ] Implement item effects and properties
- [ ] Add equipment system
- [ ] Create item drop tables
- [ ] Implement item rarity system

**Task 6.3: Item Interactions**
- [ ] Use consumables (health potions, etc.)
- [ ] Equip items for stat bonuses
- [ ] Drop items on player death
- [ ] Item durability (optional)

### Phase 7: Polish & Effects ✨

**Task 7.1: UI/HUD**
- [ ] Create HUD class for game UI
- [ ] Add health bar display
- [ ] Show minimap overlay
- [ ] Display inventory panel
- [ ] Add game menus (pause, game over)

**Task 7.2: Audio Integration**
- [ ] Integrate @pixi/sound
- [ ] Add background music system
- [ ] Implement sound effects (combat, movement, pickup)
- [ ] Add spatial audio for immersion
- [ ] Create audio settings

**Task 7.3: Visual Effects**
- [ ] Add particle effects for combat
- [ ] Implement screen shake on damage
- [ ] Create damage number popups
- [ ] Add item pickup animations
- [ ] Implement lighting effects

**Task 7.4: Balance & Polish**
- [ ] Playtest and balance combat
- [ ] Tune enemy spawn rates
- [ ] Adjust item drop rates
- [ ] Optimize performance
- [ ] Add debugging tools

## Dependencies
**What needs to happen in what order?**

### Critical Path
1. **ECS Foundation** → All game systems depend on this
2. **Player Entity** → Can't test without player
3. **Input Handling** → Player needs to move
4. **Movement System** → Core gameplay loop requires this
5. **Dungeon Generation** → Provides game content
6. **Combat System** → Core gameplay mechanic
7. **Inventory** → Player progression

### Task Dependencies
- **EventEmitter must be complete** before any systems can communicate
- **Components must exist** before Systems can process them
- **World must be implemented** before any entity logic
- **InputManager needed** for player control
- **MapGenerator requires** collision detection
- **Combat system requires** AI system for enemies
- **Inventory UI requires** InventorySystem

### External Dependencies
- **PixiJS**: Core rendering library
- **@pixi/sound**: Audio implementation
- **TypeScript**: Type safety
- **Vite**: Development environment
- **JSON data files**: Game content (enemies, items)

### Team/Resource Dependencies
- **Solo Development**: All tasks handled by single developer (Anh Tuan)
- **Asset Creation**: Need sprites, sounds, JSON definitions
- **Testing**: Manual playtesting and debugging

## Timeline & Estimates

### Phase 1: Foundation ✅ (Completed - 1 week)
- Duration: ~1 week
- Status: Complete

### Phase 2: ECS Foundation 🏗️ (2-3 weeks)
- **Task 2.1**: 3-4 days (Core ECS architecture)
- **Task 2.2**: 2 days (Core components)
- **Task 2.3**: 3-4 days (Core systems)
- **Task 2.4**: 2 days (Integration)
- **Total**: ~10-12 days

### Phase 3: Player & Controls 🎮 (1-2 weeks)
- **Task 3.1**: 1 day (Player entity)
- **Task 3.2**: 3-4 days (Input handling)
- **Task 3.3**: 2 days (Movement enhancement)
- **Task 3.4**: 2-3 days (Camera)
- **Total**: ~8-10 days

### Phase 4: Dungeon Generation 🏰 (2-3 weeks)
- **Task 4.1**: 2 days (Map infrastructure)
- **Task 4.2**: 3-4 days (Room generation)
- **Task 4.3**: 2-3 days (Corridor generation)
- **Task 4.4**: 2-3 days (Spawning)
- **Task 4.5**: 2 days (Integration)
- **Total**: ~11-14 days

### Phase 5: Combat & Progression ⚔️ (2 weeks)
- **Task 5.1**: 3-4 days (Combat system)
- **Task 5.2**: 4-5 days (Enemy AI)
- **Task 5.3**: 2-3 days (Progression)
- **Total**: ~9-12 days

### Phase 6: Inventory & Items 🎒 (1-2 weeks)
- **Task 6.1**: 3-4 days (Inventory system)
- **Task 6.2**: 2-3 days (Item system)
- **Task 6.3**: 2-3 days (Interactions)
- **Total**: ~7-10 days

### Phase 7: Polish & Effects ✨ (2-3 weeks)
- **Task 7.1**: 3-4 days (UI/HUD)
- **Task 7.2**: 2-3 days (Audio)
- **Task 7.3**: 3-4 days (Visual effects)
- **Task 7.4**: 3-4 days (Balance & testing)
- **Total**: ~11-15 days

### Overall Timeline
- **Total Estimated**: ~56-73 days (~8-10 weeks)
- **Current Progress**: Foundation complete, ECS in progress
- **MVP Target**: Complete core gameplay loop (Phases 2-5)
- **Full Release Target**: Complete all phases

## Risks & Mitigation

### Technical Risks

**Risk: ECS Complexity**
- Impact: High - Architecture is complex to implement correctly
- Mitigation: Start simple, add features incrementally; Reference other ECS implementations
- Priority: Medium

**Risk: Performance Issues with Many Entities**
- Impact: Medium - Game may lag with 100+ entities
- Mitigation: Optimize systems early (object pooling, spatial partitioning); Profile regularly
- Priority: High

**Risk: Dungeon Generation Bugs**
- Impact: High - Invalid dungeons break gameplay
- Mitigation: Extensive testing of generation algorithm; Fallback to simple layouts
- Priority: High

**Risk: PixiJS Learning Curve**
- Impact: Low - New rendering API to learn
- Mitigation: Documentation and examples; Start with basics
- Priority: Low

### Resource Risks

**Risk: Asset Creation Time**
- Impact: Medium - Need sprites, sounds, data files
- Mitigation: Use placeholder graphics initially; Reuse existing assets; Use simple shapes
- Priority: Medium

**Risk: Scope Creep**
- Impact: High - Feature requests during development
- Mitigation: Stick to planned features for MVP; Post-MVP enhancements tracked separately
- Priority: High

**Risk: Balancing Difficulty**
- Impact: Low - Playtesting will reveal balance issues
- Mitigation: Design for easy iteration (JSON data); Regular testing sessions
- Priority: Low

### Dependency Risks

**Risk: PixiJS Breaking Changes**
- Impact: Low - Using latest version with good stability
- Mitigation: Pin version in package.json; Monitor updates carefully
- Priority: Low

**Risk: JSON Data Errors**
- Impact: Medium - Invalid data crashes game
- Mitigation: Add JSON validation on load; Type safety with TypeScript; Fallback defaults
- Priority: Medium

**Risk: Browser Compatibility**
- Impact: Low - Modern browsers required
- Mitigation: Target Chromium and Firefox; Feature detection; Graceful degradation
- Priority: Low

## Resources Needed

### Team Members and Roles
- **Developer**: Anh Tuan (full-stack development, architecture, implementation)
- **Artist** (optional): Sprite creation and animation
- **Sound Designer** (optional): Audio effects and music

### Tools and Services
- **Development**: VS Code with TypeScript, ESLint
- **Build Tool**: Vite for development and bundling
- **Version Control**: Git/GitHub
- **Graphics**: Placeholder graphics, later may add sprite editor
- **Audio**: Free sounds from online libraries or @pixi/sound integration

### Infrastructure
- **Hosting**: GitHub Pages or Netlify (free static hosting)
- **Asset Storage**: Bundled with application (no CDN)
- **Analytics** (optional): Basic page view tracking
- **CI/CD** (optional): GitHub Actions for automated testing

### Documentation/Knowledge
- **ECS Patterns**: Reference implementations, articles
- **Dungeon Generation**: Algorithms (BSP, Delaunay triangulation)
- **PixiJS Documentation**: Official docs and examples
- **Game Design**: Roguelike design patterns
- **Learning Resources**: Online tutorials for PixiJS and ECS

### Asset Requirements
- **Sprites**: Player, enemies (10+ types), items (20+ types), tiles
- **Audio**: Combat sounds, footsteps, ambient, background music
- **Data Files**: Enemy definitions, item definitions, levels config
- **UI Elements**: Health bars, buttons, panels, icons

## Success Metrics

### Development Progress
- Track completed tasks vs. planned tasks
- Monitor milestone completion dates
- Measure code quality (ESLint errors, test coverage)

### Gameplay Metrics
- Maintain 60 FPS during gameplay
- Successful dungeon generation rate (100%)
- No critical bugs in core gameplay loop
- Player can reach at least level 5

### Code Quality
- Test coverage for critical systems (target: 80%)
- Zero ESLint errors in codebase
- All TypeScript types properly defined
- Clean architecture with proper separation of concerns

