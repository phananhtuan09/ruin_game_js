# Plan: Setup Source Base Hoàn Chỉnh

## Goal
Thiết lập đầy đủ cấu trúc source base theo `PROJECT_STRUCTURE.md`, bao gồm:
- Tạo toàn bộ cấu trúc thư mục và skeleton files với code theo ECS pattern
- Setup test framework (Vitest) và cấu trúc tests/
- Tạo type definitions đầy đủ dựa trên code hiện có
- Tạo barrel exports (index.ts) cho mỗi module
- Tạo cấu trúc public/assets/
- Tạo các config files quan trọng (LICENSE, CHANGELOG)

### Acceptance Criteria (Given/When/Then)
- Given: Dự án hiện có một số core files và cấu trúc cơ bản
- When: Thực hiện setup source base hoàn chỉnh
- Then: 
  - Toàn bộ thư mục và files theo PROJECT_STRUCTURE.md đã được tạo với skeleton code
  - Type definitions đầy đủ trong `src/types/` theo pattern code hiện có
  - Barrel exports (index.ts) có sẵn cho mỗi module/layer
  - Test framework (Vitest) đã được setup và cấu trúc tests/ đã tạo
  - Cấu trúc public/assets/ đã được tạo
  - LICENSE và CHANGELOG.md đã được tạo
  - Build pass không lỗi TypeScript/linter
  - Tất cả files tuân thủ CODE_CONVENTIONS.md

## Tasks (overview)
- [x] Tạo cấu trúc thư mục public/assets/ (audio, fonts, shaders, textures, data)
- [x] Tạo skeleton files cho src/core/ còn thiếu (DebugManager, input/InputManager, input/actions)
- [x] Tạo toàn bộ skeleton files cho src/game/ecs/ (components, systems, entities, World)
- [x] Tạo skeleton files cho src/game/map/ (MapGenerator, MapManager, TileManager)
- [x] Tạo skeleton files cho src/game/scenes/ (MainMenuScene, DungeonScene, GameOverScene, VictoryScene, PauseScene)
- [x] Tạo skeleton files cho src/game/ui/ (HUD, Minimap, InventoryPanel, DialogueBox, MainMenu)
- [x] Tạo skeleton files cho src/modules/ (audio, physics, quest, save, effects)
- [x] Tạo skeleton files cho src/shared/ (constants, math, utils, Config)
- [x] Tạo đầy đủ type definitions trong src/types/ (game.d.ts, ecs.d.ts, assets.d.ts, events.d.ts)
- [x] Tạo barrel exports (index.ts) cho tất cả modules và layers
- [x] Setup Vitest và cấu trúc tests/ (core, ecs, utils, test-setup)
- [x] Tạo LICENSE và CHANGELOG.md

## Risks/Assumptions
- **Risks**:
  - Skeleton code có thể không khớp 100% với implementation thực tế sau này
  - Type definitions có thể cần điều chỉnh khi implement chi tiết
  - Test framework setup có thể cần config bổ sung cho Vite/PixiJS
  
- **Assumptions**:
  - Code hiện có (EventEmitter, Application, etc.) là pattern chuẩn để follow
  - ECS pattern sẽ được implement theo cách components chỉ chứa data, systems chỉ chứa logic
  - Vitest là test framework phù hợp (tương thích Vite)
  - MIT License là license mong muốn

## Observability
- Logging requirements:
  - Skeleton files có thể có console.log cho debugging lifecycle
  - Test setup cần logging cho test results
  
- Metrics/telemetry:
  - Không áp dụng trong phase setup này

## Metrics / Definition of Done
- ✅ Build green: `npm run build` và `npm run type-check` pass không lỗi
- ✅ Linter pass: `npm run lint` không có errors
- ✅ Structure complete: Tất cả thư mục và files theo PROJECT_STRUCTURE.md đã được tạo
- ✅ Type safety: Type definitions đầy đủ, không có `any` types không cần thiết
- ✅ Barrel exports: Mỗi module/layer có index.ts để export
- ✅ Test framework: Vitest đã được setup, có thể chạy tests cơ bản
- ✅ Code conventions: Tất cả files tuân thủ CODE_CONVENTIONS.md
- ✅ Config files: LICENSE và CHANGELOG.md đã được tạo

## Execution Checklist (Todo)
- Before starting implementation, generate a todo checklist from this plan.
- Do not start coding until the todo list exists and is agreed.
