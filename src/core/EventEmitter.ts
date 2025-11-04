export class EventEmitter {
  private events: Map<string, Function[]> = new Map();

  on(event: string, callback: Function): void {
    console.log(`Event ${event} registered`);
    if(this.events.has(event)){
      this.events.get(event)?.push(callback);
    }
    else {
      this.events.set(event, [callback]);
    }
  }

  emit(event: string, data?: any): void {
    console.log(`Event ${event} emitted`);
    if(this.events.has(event)) {
      this.events.get(event)?.forEach((callback) => callback(data)) ?? [];
    } else {
      console.warn(`Event ${event} not found`);
    }
  }
}
