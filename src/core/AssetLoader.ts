export class AssetLoader {
    private assets: Map<string, any> = new Map();

    constructor() {
        this.assets = new Map();
    }

    load(asset: any): void {
        this.assets.set(asset.name, asset);
    }
}