/**
 * ECS (Entity-Component-System) type definitions
 */

export interface Component {
  // Base interface for all components
}

export interface System {
  update(entities: Entity[], delta: number, ...args: any[]): void;
}

export interface Entity {
  id: string;
  [componentName: string]: Component | any;
}

export type ComponentType<T extends Component = Component> = new (...args: any[]) => T;

export interface QueryResult<T extends Component = Component> {
  entity: Entity;
  component: T;
}
