import { Dimension } from '../models/dimension';

const AGING: number = 0.1;
const BOUNDS_OFFSET: number = 5;
const MAX_AGE_PULL: number = 100;
const MIN_AGE_PULL: number = 10;
export class Particle {
  public position!: Dimension;
  public speed!: Dimension;
  public bounds!: Dimension;
  public age!: number;
  public maxAge!: number;
  public reachedMaxAge!: boolean;

  constructor(bounds: Dimension) {
    this.bounds = bounds;
    this.init();
  }

  private init(respawn: boolean = false) {
    this.position = {
      x: Math.random() * (this.bounds.x - BOUNDS_OFFSET) + BOUNDS_OFFSET,
      y: Math.random() * (this.bounds.y - BOUNDS_OFFSET) + BOUNDS_OFFSET,
    };

    this.speed = {
      x: (Math.random() - 0.5) * 1,
      y: (Math.random() - 0.5) * 1,
    };

    this.age = respawn ? 0 : Math.random() * MAX_AGE_PULL + MIN_AGE_PULL;
    this.maxAge = Math.random() * MAX_AGE_PULL + MIN_AGE_PULL;
    this.reachedMaxAge = respawn ? false : Math.random() < 0.5;
  }

  public get cycleFinished(): boolean {
    return this.age <= 0;
  }

  public get strength(): number {
    return this.age / this.maxAge;
  }

  public move() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    if (this.age >= this.maxAge) this.reachedMaxAge = true;

    if (!this.reachedMaxAge) this.age += AGING;
    else this.age -= AGING;

    if (
      this.position.x > this.bounds.x - BOUNDS_OFFSET ||
      this.position.x < BOUNDS_OFFSET
    )
      this.speed.x = -this.speed.x;
    if (
      this.position.y > this.bounds.y - BOUNDS_OFFSET ||
      this.position.y < BOUNDS_OFFSET
    )
      this.speed.y = -this.speed.y;

    if (this.cycleFinished) this.init(true);
  }
}
