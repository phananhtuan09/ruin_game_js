export class Scene {
    onEnter(): void {
        console.log("Scene entered");
    }
    onExit(): void {
        console.log("Scene exited");
    }
    update(delta: number): void {
        console.log("Scene updated");
    }
    dispose(): void {
        console.log("Scene disposed");
    }
}
