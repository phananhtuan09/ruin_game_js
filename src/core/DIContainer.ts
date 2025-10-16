export class DIContainer {
  private services = new Map<string, any>();
  private factories = new Map<string, Function>();

  register(name: string, factory: Function): void {
    this.factories.set(name, factory);
  }

  get(name: string): any {
    // check if the instance is already created
    if (this.services.has(name)) {
      return this.services.get(name);
    }

    const factory = this.factories.get(name);
    if (!factory) {
      throw new Error(`Factory for ${name} not found`);
    }

    const instance = factory();
    this.services.set(name, instance);
    return instance;
  }
}
