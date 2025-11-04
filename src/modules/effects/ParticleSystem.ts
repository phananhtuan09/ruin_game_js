import * as PIXI from 'pixi.js';

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private container: PIXI.Container;

  constructor(container: PIXI.Container) {
    this.container = container;
    console.log('✅ ParticleSystem initialized');
  }

  public emit(x: number, y: number, count: number = 10): void {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        life: 1.0,
        maxLife: 1.0,
      });
    }
  }

  public update(delta: number): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      particle.x += particle.vx * delta;
      particle.y += particle.vy * delta;
      particle.life -= delta;

      if (particle.life <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }
}

export default ParticleSystem;
