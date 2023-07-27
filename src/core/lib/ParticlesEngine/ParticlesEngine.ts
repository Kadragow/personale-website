import Dimension from '../../models/dimension';
import Particle from './Particle';
import { hexToRgb } from '../helpers/colors';
import { getCssVariable } from '../helpers/variable';

const ANIMATION_INTERVAL = 50;
const MAX_RANGE = 150;
const PARTICLES_AMOUNT = 150;
export default class PartclesEngine {
  private bounds: Dimension;
  private context: CanvasRenderingContext2D;
  public particles: Particle[] = [];
  public intervalAnimation!: NodeJS.Timeout;

  constructor(context: CanvasRenderingContext2D, bounds: Dimension) {
    this.context = context;
    this.bounds = bounds;

    this.spawnParticles();
    this.animate();
  }

  private spawnParticles(): void {
    for (let i = 0; i < PARTICLES_AMOUNT; i++) {
      this.particles.push(new Particle(this.bounds));
    }
  }

  private drawParticle(p: Particle): void {
    const cssColor = getCssVariable('--text');
    const particleColor = hexToRgb(cssColor);
    this.context.strokeStyle = `rgba(${particleColor}, ${p.strength})`;
    this.context.lineWidth = p.strength;
    this.context.beginPath();
    this.context.moveTo(p.position.x, p.position.y);
    this.context.lineTo(p.position.x, p.position.y);
    this.context.stroke();
  }

  private drawLine(p1: Particle, p2: Particle): void {
    const maxDist = Math.min(this.bounds.x / 5, MAX_RANGE);
    const distance = Math.hypot(
      p2.position.x - p1.position.x,
      p2.position.y - p1.position.y
    );

    if (distance > maxDist) return;
    const opacity = Math.min(
      p1.strength * p2.strength * (1 - distance / maxDist),
      1
    );

    const cssColor = getCssVariable('--text');
    const lineColor = hexToRgb(cssColor);
    this.context.strokeStyle = `rgba(${lineColor}, ${opacity})`;
    this.context.lineWidth = 2;
    this.context.beginPath();
    this.context.moveTo(p1.position.x, p1.position.y);
    this.context.lineTo(p2.position.x, p2.position.y);
    this.context.stroke();

    // Its here due to max distance breakpoint
    // p1.addGravityVelocity(p2);
  }

  private draw(): void {
    this.context.lineCap = 'round';
    this.context.clearRect(0, 0, this.bounds.x, this.bounds.y);
    this.particles.forEach((p1: Particle): void => {
      this.drawParticle(p1);
      p1.move();
      this.particles.forEach((p2: Particle): void => {
        this.drawLine(p1, p2);
      });
    });
  }

  private animate(): void {
    this.intervalAnimation = setInterval(() => this.draw(), ANIMATION_INTERVAL);
  }

  public clear(): void {
    clearInterval(this.intervalAnimation);
  }

  public reset(): void {
    this.clear();
    this.animate();
  }
}
