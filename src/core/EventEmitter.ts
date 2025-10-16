export class EventEmitter {
  private events: Map<string, Function[]> = new Map();

  on(event: string, callback: Function): void {
    console.log(`Event ${event} registered`);
  }

  emit(event: string, data?: any): void {
    console.log(`Event ${event} emitted`);
  }
}
