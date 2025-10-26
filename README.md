# Ruin Game

A dungeon exploration roguelike game built with JavaScript and PixiJS.

## Overview

Ruin is a dungeon exploration game built with JavaScript and PixiJS. This is a roguelike/dungeon crawler where players explore procedurally generated dungeons, fight monsters, collect loot, and progress through increasingly challenging levels.

## Features

- **Procedural Dungeon Generation** - Every playthrough offers unique layouts
- **Entity-Component-System Architecture** - Modular and scalable game design
- **Dynamic Lighting System** - Atmospheric lighting and fog of war
- **Tactical Combat** - Strategic turn-based or real-time combat
- **Loot & Progression** - Discover weapons, armor, and magical items
- **Audio Integration** - Immersive sound effects and ambient music

## Technology Stack

- **Frontend**: JavaScript ES2022+ with PixiJS for 2D graphics
- **Build Tool**: Vite for development and production builds
- **Code Quality**: ESLint + Prettier for consistent code style
- **Audio**: @pixi/sound for game audio management

## Requirements

- **Node.js**: 20.14.0 or higher
- **npm**: Latest version
- Modern web browser with WebGL support

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ruin-game.git
   cd ruin-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to play the game.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production version
- `npm run preview` - Preview production build locally
- `npm run serve` - Serve production build
- `npm run lint` - Run ESLint code analysis
- `npm run lint:fix` - Fix ESLint issues automatically

## Project Structure

The project follows a modular architecture with clear separation of concerns:

```
src/
├── core/          # Reusable engine components
├── game/          # Game-specific logic (ECS systems)
├── modules/       # Independent feature modules
├── shared/        # Common utilities and constants
└── main.js        # Application entry point
```

## Development Guidelines

- Follow the **Entity-Component-System** pattern for game logic
- Use **data-driven design** with JSON configurations
- Maintain **modular architecture** with clear layer boundaries
- Write **clean, documented code** following project conventions

## Architecture Principles

- **Modularity**: Each component is an independent unit
- **Data-Driven**: Game behavior defined through data files
- **Event-Driven**: Systems communicate via events
- **Performance-Focused**: Optimized for 60fps gameplay

## Contributing

1. Read `AGENTS.md` for AI agent guidelines
2. Follow coding standards in `docs/ai/project/CODE_CONVENTIONS.md`
3. Understand project structure in `docs/ai/project/PROJECT_STRUCTURE.md`
4. Write tests for new features
5. Submit pull requests with clear descriptions

## Game Controls

- **WASD** or **Arrow Keys** - Movement
- **Mouse** - Interact with UI elements
- **Space** - Action/Attack
- **Tab** - Toggle inventory
- **M** - Toggle minimap
- **Esc** - Pause menu

## Technical Features

- **WebGL Rendering** - Hardware-accelerated graphics
- **Spatial Audio** - 3D positioned sound effects
- **Asset Management** - Efficient loading and caching
- **State Management** - Robust game state handling
- **Debug Tools** - Built-in debugging utilities

## Roadmap

- [x] Project setup and architecture
- [x] Core engine systems
- [ ] Basic player movement and controls
- [ ] Dungeon generation algorithm
- [ ] Combat system implementation
- [ ] Inventory and items
- [ ] Audio integration
- [ ] UI/UX polish
- [ ] Performance optimization

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Anh Tuan** - Game Developer

## Acknowledgments

- PixiJS community for excellent 2D rendering engine
- Game development community for inspiration and resources
- Contributors and testers for feedback and improvements

---

**Note**: This game is currently in active development. Features and gameplay mechanics may change during the development process.