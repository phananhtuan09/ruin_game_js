export class InventoryComponent {
  public items: string[];
  public maxSize: number;

  constructor(maxSize: number = 10) {
    this.maxSize = maxSize;
    this.items = [];
  }
}

export default InventoryComponent;
