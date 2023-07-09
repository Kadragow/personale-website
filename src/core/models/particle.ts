import { Dimension } from './dimension';

export interface Particle {
  position: Dimension;
  speed: Dimension;
  age: number;
  maxAge: number;
  reachMaxAge: boolean;
}
